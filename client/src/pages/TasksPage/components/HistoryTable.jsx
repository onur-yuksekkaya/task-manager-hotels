import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import TaskApi from 'api/services/task';

import EditTask from './EditTask';
import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';
import ConfirmModal from 'components/Modal/ConfirmModal';

import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

import {
  tableHeaders,
  headerWidths,
  historyRowCount,
} from '../taskTableConfig';
import { toggleModalState } from 'utils/utils';

export default function HistoryTable({
  userList,
  selectedTask,
  setSelectedTask,
  deleteTask,
}) {
  const { user } = useAuth();

  const [page, setPage] = useState(1);
  const [historyList, setHistoryList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [historyHasNextPage, setHistoryHasNexPage] = useState(false);
  const [historyTableModals, setHistoryTableModals] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const loadHistoryList = async (pageNumber = 1) => {
    setLoading(true);
    const data = await TaskApi.getHistoryTasks({
      page: pageNumber,
      rowCount: historyRowCount,
    });
    if (data) {
      setHistoryList(data.taskList);
      setHistoryHasNexPage(data.hasNextPage);
    }
    setLoading(false);
  };

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

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

  useEffect(() => {
    loadHistoryList(page);
  }, [page]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 my-52 mx-auto w-12 h-12" />
        </div>
      ) : (
        <>
          <Table
            tableActions={historyTableActions}
            tableHeaders={tableHeaders}
            tableItems={historyList}
            headerWidths={headerWidths}
            selectedItem={selectedTask}
            setSelectedItem={setSelectedTask}
            pageChangers={{ goToNextPage, goToPrevPage }}
            page={page}
            loadTable={loadHistoryList}
            hasNextPage={historyHasNextPage}
            isAdminViewing={user.isAdmin}
          />

          {historyTableModals.edit && (
            <Modal
              setIsOpen={() => toggleModalState('edit', setHistoryTableModals)}
              isOpen={historyTableModals.edit}
              title="Görevi Düzenle"
            >
              <EditTask
                setIsOpen={() =>
                  toggleModalState('edit', setHistoryTableModals)
                }
                selectedTask={selectedTask}
                userList={userList}
                loadTask={loadHistoryList}
              />
            </Modal>
          )}
          {historyTableModals.delete && (
            <ConfirmModal
              modalActionOnConfirm={() => {
                deleteTask(selectedTask);
                loadHistoryList(1);
              }}
              modalText="Görev silinsin mi?"
              modalTitle="Görevi Sil"
              modalSuccessText="Görev Silindi!"
              modalToggle={() =>
                toggleModalState('delete', setHistoryTableModals)
              }
            />
          )}
        </>
      )}
    </>
  );
}
