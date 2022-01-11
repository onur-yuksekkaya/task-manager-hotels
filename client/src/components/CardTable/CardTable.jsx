import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import CardTableBody from './CardTableBody';
import TableActionRow from 'components/Table/TableActionRow';

export default function CardTable({
  tableActions,
  tableItems,
  hasNextPage,
  page,
  selectedItem,
  setSelectedItem,
  isAdminViewing,
  setPage,
}) {
  const goToNextPage = () => setPage((prevPage) => prevPage + 1);
  const goToPrevPage = () => setPage((prevPage) => prevPage - 1);

  return (
    <div className="flex flex-col w-full lg:w-[98%] gap-y-2">
      <TableActionRow
        tableActions={tableActions}
        isAdminViewing={isAdminViewing}
        selectedItem={selectedItem}
      />
      <CardTableBody
        tableItems={tableItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {hasNextPage || page > 1 ? (
        <div className="flex justify-center gap-x-5 my-10">
          <button
            className="text-white rounded bg-indigo-600 active:-translate-x-3  duration-150 disabled:bg-gray-500 disabled:active:-translate-x-0"
            disabled={page <= 1}
            onClick={goToPrevPage}
          >
            <ChevronLeftIcon className="w-10" />
          </button>
          <button
            className="text-white rounded bg-indigo-600 active:translate-x-3  duration-150 disabled:bg-gray-500 disabled:active:translate-x-0"
            disabled={!hasNextPage}
            onClick={goToNextPage}
          >
            <ChevronRightIcon className="w-10" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
