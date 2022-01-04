import React, { useEffect, useState } from 'react';

import EmployeeApi, {
  deleteEmployee,
  getEmployeeData,
} from 'api/services/employee';
import { tableHeaders, headerWidths } from './userTableConfig';

import Table from 'components/Table/Table';
import Modal from 'components/Modal/Modal';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Loading from 'components/Loading/Loading';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const rowCount = 10;

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState();
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [tableHasNextPage, setTableHasNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedUserValues, setSelectedUserValues] = useState(undefined);

  const UserSwal = withReactContent(Swal);

  const loadUserList = async (pageNumber = 1) => {
    setLoading(true);
    const { employeeList, hasNextPage } = await EmployeeApi.getAllEmployees({
      page: pageNumber,
      rowCount,
    });
    setTableHasNextPage(hasNextPage);
    setUserList(employeeList);
    setLoading(false);
  };

  const loadSelectedUserValues = async (id) => {
    setLoading(true);
    const { employee } = await getEmployeeData({ id });
    setSelectedUserValues(employee);
    console.log(employee);
    setLoading(false);
    showEditModal(true);
  };

  const deleteSelectedUser = async (id) => {
    await deleteEmployee(id);
    setSelectedUserValues('');
    setSelectedUser('');
    loadUserList(page);
  };

  useEffect(() => {
    loadUserList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const deleteConfirmAlert = () => {
    UserSwal.fire({
      title: <strong className="text-indigo-800">Çalışan Sil</strong>,
      html: <i className="text-indigo-600">Çalışan silinsin mi?</i>,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sil',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#be123c',
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteSelectedUser({ id: selectedUser });
        deleteSuccessAlert();
      }
    });
  };

  const deleteSuccessAlert = () => {
    UserSwal.fire({
      title: <strong>Çalışan Silindi!</strong>,
      icon: 'success',
      showConfirmButton: false,
      didOpen: () => {
        setTimeout(() => {
          UserSwal.close();
        }, 1400);
      },
    });
  };

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

  const userTableActions = [
    {
      name: 'add',
      action: () => showAddModal(true),
      icon: <PlusIcon className="w-9/12 h-9/12" />,
      showOnlySelect: false,
    },
    {
      name: 'edit',
      action: () => loadSelectedUserValues(selectedUser),
      icon: <PencilIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
    },
    {
      name: 'delete',
      action: () => {
        deleteConfirmAlert();
      },
      icon: <TrashIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 m-auto w-12 h-12" />
        </div>
      ) : (
        <Table
          tableActions={userTableActions}
          tableHeaders={tableHeaders}
          tableItems={userList}
          headerWidths={headerWidths}
          hasNextPage={tableHasNextPage}
          selectedItem={selectedUser}
          setSelectedItem={setSelectedUser}
          pageChangers={{ goToNextPage, goToPrevPage }}
          page={page}
          loadTable={loadUserList}
        />
      )}
      <Modal
        setIsOpen={showAddModal}
        isOpen={isAddModalOpen}
        title="Bir Çalışan Oluşturun"
      >
        <AddUser setIsOpen={showAddModal} loadUserData={loadUserList} />
      </Modal>

      <Modal
        setIsOpen={showEditModal}
        isOpen={isEditModalOpen}
        title="Çalışan Bilgilerini Düzenleyin"
        onClose={() => {
          setSelectedUser('');
          setSelectedUserValues('');
          showEditModal(false);
        }}
      >
        <EditUser
          selectedUser={selectedUser}
          setIsOpen={showEditModal}
          userValues={selectedUserValues}
          loadUserData={loadUserList}
        />
      </Modal>
    </>
  );
}
