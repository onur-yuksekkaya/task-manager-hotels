import React from 'react';
import useTableHeaderWidth from 'hooks/useTableHeaderWidth';

import TableBody from './TableBody';
import TableButton from './TableButton';
import TableHeader from './TableHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import TableActionRow from './TableActionRow';

export default function Table({
  tableActions,
  tableHeaders,
  tableItems,
  loadTable,
  headerWidths,
  hasNextPage,
  page,
  pageChangers,
  selectedItem,
  setSelectedItem,
  isAdminViewing,
}) {
  const [widths, unit] = useTableHeaderWidth(tableHeaders, headerWidths);

  return (
    //CONTEXT YAPILABILIR PROP GOMMEK YERINE
    <div className="flex flex-col w-full lg:w-[98%] gap-y-2">
      <TableActionRow
        tableActions={tableActions}
        isAdminViewing={isAdminViewing}
        selectedItem={selectedItem}
      />
      <TableHeader
        tableHeaders={tableHeaders}
        headerWidths={widths}
        unit={unit}
      />
      <TableBody
        unit={unit}
        headerWidths={widths}
        tableItems={tableItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="flex justify-center gap-x-5">
        <button
          className="text-white rounded bg-indigo-600 active:-translate-x-3  duration-150 disabled:bg-gray-500 disabled:active:-translate-x-0"
          disabled={page <= 1}
          onClick={pageChangers.goToPrevPage}
        >
          <ChevronLeftIcon className="w-10" />
        </button>
        <button
          className="text-white rounded bg-indigo-600 active:translate-x-3  duration-150 disabled:bg-gray-500 disabled:active:translate-x-0"
          disabled={!hasNextPage}
          onClick={pageChangers.goToNextPage}
        >
          <ChevronRightIcon className="w-10" />
        </button>
      </div>
    </div>
  );
}
