import React, { useEffect, useState } from 'react';
import TaskApi from 'api/services/task';

import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';

import { tableHeaders, headerWidths, activeRowCount } from '../taskTableConfig';

export default function ActiveTable({
  setSelectedActiveItem,
  selectedActiveItem,
  showAddModal,
  showEditModal,
}) {
  const [page, setPage] = useState(1);
  const [activeList, setActiveList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const loadActiveList = async (pageNumber = 1) => {
    setLoading(true);
    const data = await TaskApi.getActiveTasks({ pageNumber, activeRowCount });
    if (data) {
      setActiveList(data.taskList);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadActiveList(page);
  }, [page]);

  const goToNextPage = () => setPage(page + 1);
  const goToPrevPage = () => setPage(page - 1);

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
      action: () => {},
      icon: <TrashIcon className="w-9/12 h-9/12" />,
      showOnlySelect: true,
    },
  ];

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
          tableItems={activeList}
          headerWidths={headerWidths}
          selectedItem={selectedActiveItem}
          setSelectedItem={setSelectedActiveItem}
          pageChangers={{ goToNextPage, goToPrevPage }}
          page={page}
          loadTable={loadActiveList}
        />
      )}
    </>
  );
}
