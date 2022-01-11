import React, { useEffect, useMemo, useState } from 'react';
import TaskApi from 'api/services/task';
import { useAuth } from 'context/AuthContext';
import { useTask } from 'context/TaskContext';
import { closeModal, findUserNames, toggleModalState } from 'utils/utils';

import AddTask from './AddTask';
import EditTask from './EditTask';

import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';
import ConfirmModal from 'components/Modal/ConfirmModal';

import {
  CheckIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { tableHeaders, headerWidths } from '../taskTableConfig';
import CardTable from 'components/CardTable/CardTable';

export default function ActiveTable({ userList }) {
  const { user } = useAuth();
  const {
    loadActiveTasks,
    activeTasks,
    deleteTask,
    selectedTask,
    setSelectedTask,
  } = useTask();

  const [page, setPage] = useState(1);
  const [activeTableModals, setActiveTableModals] = useState({
    add: false,
    edit: false,
    delete: false,
    complete: false,
  });

  const completeTask = async (id) => {
    await TaskApi.updateTask({ id, status: 'done' });
    setSelectedTask('');
    loadActiveTasks(1);
  };

  const activeTableActions = [
    {
      name: 'add',
      text: 'Ekle',
      action: () => toggleModalState('add', setActiveTableModals),
      icon: <PlusIcon className="w-6 h-6" />,
      showOnlySelect: false,
      isAdminControlled: true,
    },
    {
      name: 'edit',
      text: 'Düzenle',
      action: () => toggleModalState('edit', setActiveTableModals),
      icon: <PencilIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'delete',
      text: 'Sil',
      action: () => {
        toggleModalState('delete', setActiveTableModals);
      },
      icon: <TrashIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'complete',
      text: 'Tamamla',
      action: () => {
        toggleModalState('complete', setActiveTableModals);
      },
      icon: <CheckIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: false,
    },
  ];

  const taskListWithNames = useMemo(() => {
    return findUserNames(userList, activeTasks.data);
  }, [activeTasks.data]);

  useEffect(() => {
    loadActiveTasks(page);
  }, [page, userList]);

  return (
    <>
      {activeTasks.loading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 my-52 mx-auto w-12 h-12" />
        </div>
      ) : (
        <CardTable
          tableActions={activeTableActions}
          tableHeaders={tableHeaders}
          tableItems={taskListWithNames}
          headerWidths={headerWidths}
          selectedItem={selectedTask}
          setSelectedItem={setSelectedTask}
          setPage={setPage}
          page={page}
          hasNextPage={activeTasks.hasNextPage}
          isAdminViewing={user.isAdmin}
        />
      )}
      {activeTableModals.add && (
        <Modal
          setIsOpen={() => toggleModalState('add', setActiveTableModals)}
          isOpen={activeTableModals.add}
          title="Bir Görev Ekleyin"
        >
          <AddTask
            setIsOpen={() => toggleModalState('add', setActiveTableModals)}
            loadTask={loadActiveTasks}
            userList={userList}
          />
        </Modal>
      )}
      {activeTableModals.edit && (
        <Modal
          setIsOpen={() => toggleModalState('edit', setActiveTableModals)}
          isOpen={activeTableModals.edit}
          title="Görevi Düzenle"
        >
          <EditTask
            setIsOpen={() => toggleModalState('edit', setActiveTableModals)}
            selectedTask={selectedTask}
            userList={userList}
            loadTask={loadActiveTasks}
          />
        </Modal>
      )}
      {activeTableModals.delete && (
        <ConfirmModal
          modalActionOnConfirm={() => {
            deleteTask(selectedTask);
            loadActiveTasks(1);
          }}
          modalText="Görev silinsin mi?"
          modalTitle="Görevi Sil"
          modalSuccessText="Görev Silindi!"
          modalClose={() => closeModal('delete', setActiveTableModals)}
          modalConfirmButtonText="Sil"
        />
      )}
      {activeTableModals.complete && (
        <ConfirmModal
          modalActionOnConfirm={() => {
            completeTask(selectedTask);
          }}
          modalText="Görev tamamlansın mı?"
          modalTitle="Görevi Tamamla"
          modalSuccessText="Görev Tamamlandı!"
          modalClose={() => closeModal('complete', setActiveTableModals)}
          modalConfirmButtonText="Tamamla"
        />
      )}
    </>
  );
}
