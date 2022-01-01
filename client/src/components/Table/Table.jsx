import React from 'react';
import useTableHeaderWidth from 'hooks/useTableHeaderWidth';

import TableBody from './TableBody';
import TableButton from './TableButton';
import TableHeader from './TableHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Table({
  tableActions,
  tableHeaders,
  tableItems,
  loadTable = () => {},
  headerWidths,
  hasNextPage = true,
  page = 2,
  selectedItem,
  setSelectedItem,
}) {
  const [widths, unit] = useTableHeaderWidth(tableHeaders, headerWidths);

  return (
    //CONTEXT YAPILABILIR PROP GOMMEK YERINE
    <div className="flex flex-col w-full lg:w-[98%] gap-y-2">
      <div className="flex gap-x-2 justify-center lg:justify-end h-10">
        {tableActions.map((item, index) =>
          selectedItem || !item.showOnlySelect ? (
            <TableButton key={index} icon={item.icon} onClick={item.action} />
          ) : null
        )}
      </div>
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
        >
          <ChevronLeftIcon className="w-10" />
        </button>
        <button
          className="text-white rounded bg-indigo-600 active:translate-x-3  duration-150 disabled:bg-gray-500 disabled:active:translate-x-0"
          disabled={!hasNextPage}
        >
          <ChevronRightIcon className="w-10" />
        </button>
      </div>
    </div>
  );
}
