import React, { useEffect, useState } from 'react';

import { useAuth } from 'context/AuthContext';

import EmployeeApi from 'api/services/employee';
import { tableHeaders, headerWidths, userRowCount } from './userTableConfig';

import Table from 'components/Table/Table';
import Modal from 'components/Modal/Modal';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Loading from 'components/Loading/Loading';
import ConfirmModal from 'components/Modal/ConfirmModal';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import { toggleModalState } from 'utils/utils';

export default function UsersPage() {
  const { user } = useAuth();

  const [isLoading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState();
  const [userPageModals, setUserPageModals] = useState({
    add: false,
    edit: false,
    delete: false,
  });
  const [userList, setUserList] = useState([]);
  const [tableHasNextPage, setTableHasNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedUserValues, setSelectedUserValues] = useState(undefined);

  const loadUserList = async (pageNumber = 1) => {
    setLoading(true);
    const { employeeList, hasNextPage } = await EmployeeApi.getAllEmployees({
      page: pageNumber,
      rowCount: userRowCount,
    });
    setTableHasNextPage(hasNextPage);
    setUserList(employeeList);
    setLoading(false);
  };

  const loadSelectedUserValues = async (id) => {
    setLoading(true);
    const { employee } = await EmployeeApi.getEmployeeData({ id });
    setSelectedUserValues(employee);
    setLoading(false);
    toggleModalState('edit', setUserPageModals);
  };

  const deleteSelectedUser = async (id) => {
    await EmployeeApi.deleteEmployee({ id: id });
    setSelectedUserValues('');
    setSelectedUser('');
    loadUserList(page);
  };

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

  const userTableActions = [
    {
      name: 'add',
      text: 'Ekle',
      action: () => toggleModalState('add', setUserPageModals),
      icon: <PlusIcon className="w-6 h-6" />,
      showOnlySelect: false,
      isAdminControlled: true,
    },
    {
      name: 'edit',
      text: 'Düzenle',
      action: () => loadSelectedUserValues(selectedUser),
      icon: <PencilIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'delete',
      text: 'Sil',
      action: () => {
        toggleModalState('delete', setUserPageModals);
      },
      icon: <TrashIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
  ];

  useEffect(() => {
    loadUserList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
          isAdminViewing={user.isAdmin}
        />
      )}
      <Modal
        setIsOpen={() => toggleModalState('add', setUserPageModals)}
        isOpen={userPageModals.add}
        title="Bir Çalışan Oluşturun"
      >
        <AddUser
          setIsOpen={() => toggleModalState('add', setUserPageModals)}
          loadUserData={loadUserList}
        />
      </Modal>

      <Modal
        setIsOpen={() => toggleModalState('edit', setUserPageModals)}
        isOpen={userPageModals.edit}
        title="Çalışan Bilgilerini Düzenleyin"
        onClose={() => {
          setSelectedUser('');
          setSelectedUserValues('');
          toggleModalState('edit', setUserPageModals);
        }}
      >
        <EditUser
          selectedUser={selectedUser}
          setIsOpen={() => toggleModalState('edit', setUserPageModals)}
          userValues={selectedUserValues}
          loadUserData={loadUserList}
        />
      </Modal>
      {userPageModals.delete && (
        <ConfirmModal
          modalActionOnConfirm={() => {
            deleteSelectedUser(selectedUser);
          }}
          modalText="Çalışan silinsin mi?"
          modalTitle="Çalışan Sil"
          modalSuccessText="Çalışan Silindi!"
          modalToggle={() => toggleModalState('delete', setUserPageModals)}
        />
      )}
    </>
  );
}
