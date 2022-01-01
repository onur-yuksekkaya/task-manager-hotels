import React from 'react';
import useTableHeaderWidth from 'hooks/useTableHeaderWidth';

import TableBody from './TableBody';
import TableButton from './TableButton';
import TableHeader from './TableHeader';

export default function Table({
  tableActions,
  tableHeaders = [],
  tableItems = [],
  loadTable = () => {},
  headerWidths = [],
  page = '1',
  hasNexPage = 'false',
  selectedItem,
  setSelectedItem,
}) {
  const [widths, unit] = useTableHeaderWidth(tableHeaders, headerWidths);

  return (
    //CONTEXT YAPILABILIR PROP GOMMEK YERINE
    <div className="flex flex-col w-full lg:w-[98%] gap-y-2">
      <div className="flex gap-x-2 justify-center lg:justify-end h-10">
        {tableActions.map((item) =>
          selectedItem || !item.showOnlySelect ? (
            <TableButton icon={item.icon} onClick={item.action} />
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
    </div>
  );
}
