import React, { useEffect, useState } from 'react';
import TaskApi from 'api/services/task';
import { useAuth } from 'context/AuthContext';

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

import { tableHeaders, headerWidths, activeRowCount } from '../taskTableConfig';
import { findUserNames, toggleModalState } from 'utils/utils';

export default function ActiveTable({
  userList,
  deleteTask,
  selectedTask,
  setSelectedTask,
}) {
  const { user } = useAuth();

  const [page, setPage] = useState(1);
  const [activeTasks, setActiveTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeHasNextPage, setActiveHasNextPage] = useState(false);
  const [activeTableModals, setActiveTableModals] = useState({
    add: false,
    edit: false,
    delete: false,
    complete: false,
  });

  const loadActiveList = async (pageNumber = 1) => {
    setLoading(true);
    const data = await TaskApi.getActiveTasks({
      page: pageNumber,
      rowCount: activeRowCount,
    });
    if (data && userList) {
      setActiveTasks(findUserNames(userList, data.taskList));
      setActiveHasNextPage(data.hasNextPage);
    }
    setLoading(false);
  };

  const completeTask = async (id) => {
    await TaskApi.updateTask({ id, status: 'done' });
    setSelectedTask('');
    loadActiveList(1);
  };

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

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

  useEffect(() => {
    loadActiveList(page);
  }, [page, userList]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 my-52 mx-auto w-12 h-12" />
        </div>
      ) : (
        <Table
          tableActions={activeTableActions}
          tableHeaders={tableHeaders}
          tableItems={activeTasks}
          headerWidths={headerWidths}
          selectedItem={selectedTask}
          setSelectedItem={setSelectedTask}
          pageChangers={{ goToNextPage, goToPrevPage }}
          page={page}
          loadTable={loadActiveList}
          hasNextPage={activeHasNextPage}
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
            loadTask={loadActiveList}
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
            loadTask={loadActiveList}
          />
        </Modal>
      )}
      {activeTableModals.delete && (
        <ConfirmModal
          modalActionOnConfirm={() => {
            deleteTask(selectedTask);
            loadActiveList(1);
          }}
          modalText="Görev silinsin mi?"
          modalTitle="Görevi Sil"
          modalSuccessText="Görev Silindi!"
          modalToggle={() => toggleModalState('delete', setActiveTableModals)}
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
          modalToggle={() => toggleModalState('complete', setActiveTableModals)}
          modalConfirmButtonText="Tamamla"
        />
      )}
    </>
  );
}
