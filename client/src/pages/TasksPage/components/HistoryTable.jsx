import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import TaskApi from 'api/services/task';

import EditTask from './EditTask';
import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';
import ConfirmModal from 'components/Modal/ConfirmModal';

import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

import { tableHeaders, headerWidths } from '../taskTableConfig';
import { closeModal, findUserNames, toggleModalState } from 'utils/utils';
import { useTask } from 'context/TaskContext';

export default function HistoryTable({ userList }) {
  const { user } = useAuth();
  const {
    loadHistoryTasks,
    historyTasks,
    deleteTask,
    selectedTask,
    setSelectedTask,
  } = useTask();

  const [page, setPage] = useState(1);
  const [historyTableModals, setHistoryTableModals] = useState({
    edit: false,
    delete: false,
  });

  const taskListWithNames = useMemo(() => {
    return findUserNames(userList, historyTasks.data);
  }, [historyTasks.data]);

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

  const historyTableActions = [
    {
      name: 'edit',
      text: 'Düzenle',
      action: () => toggleModalState('edit', setHistoryTableModals),
      icon: <PencilIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'delete',
      text: 'Sil',
      action: () => toggleModalState('delete', setHistoryTableModals),
      icon: <TrashIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
  ];

  useEffect(() => {
    loadHistoryTasks(page);
  }, [page, userList]);

  return (
    <>
      {historyTasks.loading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 my-52 mx-auto w-12 h-12" />
        </div>
      ) : (
        <Table
          tableActions={historyTableActions}
          tableHeaders={tableHeaders}
          tableItems={taskListWithNames}
          headerWidths={headerWidths}
          selectedItem={selectedTask}
          setSelectedItem={setSelectedTask}
          pageChangers={{ goToNextPage, goToPrevPage }}
          page={page}
          loadTable={loadHistoryTasks}
          hasNextPage={historyTasks.hasNextPage}
          isAdminViewing={user.isAdmin}
        />
      )}
      {historyTableModals.edit && (
        <Modal
          setIsOpen={() => toggleModalState('edit', setHistoryTableModals)}
          isOpen={historyTableModals.edit}
          title="Görevi Düzenle"
        >
          <EditTask
            setIsOpen={() => toggleModalState('edit', setHistoryTableModals)}
            selectedTask={selectedTask}
            userList={userList}
            loadTask={loadHistoryTasks}
          />
        </Modal>
      )}
      {historyTableModals.delete && (
        <ConfirmModal
          modalActionOnConfirm={() => {
            deleteTask(selectedTask);
            loadHistoryTasks(1);
          }}
          modalText="Görev silinsin mi?"
          modalTitle="Görevi Sil"
          modalSuccessText="Görev Silindi!"
          modalClose={() => closeModal('delete', setHistoryTableModals)}
          modalConfirmButtonText="Sil"
        />
      )}
    </>
  );
}
