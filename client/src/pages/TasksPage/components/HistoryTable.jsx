import React, { useEffect, useState } from 'react';
import TaskApi from 'api/services/task';

import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

import {
  tableHeaders,
  headerWidths,
  historyRowCount,
} from '../taskTableConfig';
import { useAuth } from 'context/AuthContext';

export default function HistoryTable({
  setSelectedHistoryItem,
  selectedHistoryItem,
  showEditModal,
}) {
  const { user } = useAuth();

  const [page, setPage] = useState(1);
  const [historyList, setHistoryList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [historyHasNextPage, setHistoryHasNexPage] = useState(false);

  const loadHistoryList = async (pageNumber = 1) => {
    setLoading(true);
    const data = await TaskApi.getHistoryTasks({ pageNumber, historyRowCount });
    if (data) {
      setHistoryList(data.taskList);
      setHistoryHasNexPage(data.hasNextPage);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadHistoryList(page);
  }, [page]);

  const historyTableActions = [
    {
      name: 'edit',
      action: () => showEditModal(true),
      icon: <PencilIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'delete',
      action: () => {},
      icon: <TrashIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
  ];

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex">
          <Loading color="text-indigo-600 my-52 mx-auto w-12 h-12" />
        </div>
      ) : (
        <Table
          tableActions={historyTableActions}
          tableHeaders={tableHeaders}
          tableItems={historyList}
          headerWidths={headerWidths}
          selectedItem={selectedHistoryItem}
          setSelectedItem={setSelectedHistoryItem}
          pageChangers={{ goToNextPage, goToPrevPage }}
          page={page}
          loadTable={loadHistoryList}
          hasNextPage={historyHasNextPage}
          isAdminViewing={user.isAdmin}
        />
      )}
    </>
  );
}
