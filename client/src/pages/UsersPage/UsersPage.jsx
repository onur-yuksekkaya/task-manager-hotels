import React, { useState } from 'react';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';

import Table from 'components/Table/Table';
import Modal from 'components/Modal/Modal';
import ConfirmationWindow from 'components/Modal/ConfirmationWindow';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import {
  dataMock,
  tableHeaders,
  headerWidths,
  defaultValuesMock,
} from './PlaceholderData';
import InfoWindow from 'components/Modal/InfoWindow';

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState();
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isDeleteModalOpen, showDeleteModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [isCompletedModalOpen, showCompletedModal] = useState(false);
  const [completedModalInfo, setCompletedModalInfo] = useState(
    'YOOO MR WHITE WASSUP'
  );

  const userTableActions = [
    {
      name: 'add',
      action: () => showAddModal(true),
      icon: <PlusIcon className="w-9/12 h-9/12" />,
      showOnlySelect: false,
    },
    {
      name: 'edit',
      action: () => showEditModal(true),
      icon: <PencilIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
    },
    {
      name: 'delete',
      action: () => showDeleteModal(true),
      icon: <TrashIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
    },
  ];

  const deleteModalActions = {
    confirm: () => {
      showDeleteModal(false);
      showCompletedModal(true);
      console.log('Sildim');
    },
    cancel: () => {
      showDeleteModal(false);
      console.log('Silmedim');
    },
  };

  return (
    <>
      <Table
        tableActions={userTableActions}
        tableHeaders={tableHeaders}
        tableItems={dataMock}
        headerWidths={headerWidths}
        selectedItem={selectedUser}
        setSelectedItem={setSelectedUser}
      />
      <Modal
        setIsOpen={showAddModal}
        isOpen={isAddModalOpen}
        title="Bir Çalışan Oluşturun"
      >
        <AddUser setIsOpen={showAddModal} />
      </Modal>
      <Modal
        setIsOpen={showDeleteModal}
        isOpen={isDeleteModalOpen}
        title="Çalışanı Sil"
      >
        <ConfirmationWindow
          question="Sil lan bunu"
          windowActions={deleteModalActions}
        />
      </Modal>
      <Modal
        setIsOpen={showEditModal}
        isOpen={isEditModalOpen}
        title="Çalışan Bilgilerini Düzenleyin"
      >
        <EditUser taskValues={defaultValuesMock} setIsOpen={showEditModal} />
      </Modal>
      <Modal
        setIsOpen={showCompletedModal}
        isOpen={isCompletedModalOpen}
        title="Tamamlandi!"
      >
        <InfoWindow
          info={completedModalInfo}
          closeWindowAction={() => {
            showCompletedModal(false);
          }}
        />
      </Modal>
    </>
  );
}
