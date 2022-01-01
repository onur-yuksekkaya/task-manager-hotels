import React, { useState } from 'react';

import Button from 'components/Buttons/Button';
import Modal from 'components/Modal/Modal';
import ActiveTable from './components/ActiveTable';
import HistoryTable from './components/HistoryTable';
import AddTask from './components/AddTask';
import ConfirmationWindow from 'components/Modal/ConfirmationWindow';
import EditTask from './components/EditTask';

import { Tab } from '@headlessui/react';
import {
  ClipboardCheckIcon,
  ClipboardListIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { defaultValuesMock } from './PlaceholderData';

export default function TasksPage() {
  const [selectedActiveItem, setSelectedActiveItem] = useState();
  const [selectedHistoryItem, setSelectedHistoryItem] = useState();
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isDeleteModalOpen, showDeleteModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const activeTableActions = [
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
  const historyTableActions = [
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
      console.log('Sildim');
    },
    cancel: () => {
      showDeleteModal(false);
      console.log('Silmedim');
    },
  };

  return (
    <>
      <Tab.Group
        onChange={(index) => {
          setSelectedActiveItem('');
          setSelectedHistoryItem('');
          setSelectedTabIndex(index);
        }}
      >
        <Tab.List className="flex gap-x-2 justify-center">
          <Tab className="basis-1/2 md:basis-2/12 lg:basis-48 2xl:basis-68 focus:outline-none">
            {/* //BUTON DUZELT BUTON ICINDE BUTON */}
            <Button
              text="Aktif Görevler"
              customStyleClass="my-2 text-indigo-500 hover:bg-indigo-600 hover:text-white"
              icon={<ClipboardListIcon className="w-6" />}
              style={{
                backgroundColor: selectedTabIndex ? '#4f46e5' : 'white',
                color: selectedTabIndex ? 'white' : '#6366f1',
              }}
            />
          </Tab>
          <Tab className="basis-1/2 md:basis-2/12 lg:basis-48 2xl:basis-68 focus:outline-none">
            <Button
              text="Tamamlanmış Görevler"
              customStyleClass="my-2 text-indigo-500 hover:bg-indigo-600 hover:text-white"
              icon={<ClipboardCheckIcon className="w-6" />}
              style={{
                backgroundColor: !selectedTabIndex ? '#4f46e5' : 'white',
                color: !selectedTabIndex ? 'white' : '#6366f1',
              }}
            />
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="focus:outline-none">
            <ActiveTable
              setSelectedActiveItem={setSelectedActiveItem}
              selectedActiveItem={selectedActiveItem}
              activeTableActions={activeTableActions}
            />
          </Tab.Panel>
          <Tab.Panel className="focus:outline-none">
            <HistoryTable
              setSelectedHistoryItem={setSelectedHistoryItem}
              selectedHistoryItem={selectedHistoryItem}
              historyTableActions={historyTableActions}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {isAddModalOpen && (
        <Modal
          setIsOpen={showAddModal}
          isOpen={isAddModalOpen}
          title="Bir Görev Ekleyin"
        >
          <AddTask setIsOpen={showAddModal} />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal
          setIsOpen={showDeleteModal}
          isOpen={isDeleteModalOpen}
          title="Görevi Sil"
        >
          <ConfirmationWindow
            question="Sil lan bunu"
            windowActions={deleteModalActions}
          />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal
          setIsOpen={showEditModal}
          isOpen={isEditModalOpen}
          title="Görevi Düzenle"
        >
          <EditTask taskValues={defaultValuesMock} setIsOpen={showEditModal} />
        </Modal>
      )}
    </>
  );
}
