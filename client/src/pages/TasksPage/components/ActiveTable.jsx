import React, { useEffect, useState } from 'react';
import TaskApi from 'api/services/task';

import Table from 'components/Table/Table';
import Loading from 'components/Loading/Loading';
import {
  CheckIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { tableHeaders, headerWidths, activeRowCount } from '../taskTableConfig';
import { useAuth } from 'context/AuthContext';

export default function ActiveTable({
  setSelectedActiveItem,
  selectedActiveItem,
  showAddModal,
  showEditModal,
}) {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [activeList, setActiveList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeHasNextPage, setActiveHasNextPage] = useState(false);

  const loadActiveList = async (pageNumber = 1) => {
    setLoading(true);
    const data = await TaskApi.getActiveTasks({
      page: pageNumber,
      rowCount: activeRowCount,
    });
    if (data) {
      setActiveList(data.taskList);
      setActiveHasNextPage(data.hasNextPage);
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
      text: 'Ekle',
      action: () => showAddModal(true),
      icon: <PlusIcon className="w-6 h-6" />,
      showOnlySelect: false,
      isAdminControlled: true,
    },
    {
      name: 'edit',
      text: 'Düzenle',
      action: () => showEditModal(true),
      icon: <PencilIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'delete',
      text: 'Sil',
      action: () => {},
      icon: <TrashIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: true,
    },
    {
      name: 'complete',
      text: 'Tamamla',
      action: () => {
        alert('kapat lan');
      },
      icon: <CheckIcon className="w-6 h-6" />,
      showOnlySelect: true,
      isAdminControlled: false,
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
          hasNextPage={activeHasNextPage}
          isAdminViewing={user.isAdmin}
        />
      )}
    </>
  );
}
