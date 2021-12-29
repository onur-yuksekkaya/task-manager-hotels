import useTableHeaderWidth from 'hooks/useTableHeaderWidth';
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default function Table({
  tableFieldNames = [],
  tableHeaders = [],
  tableItems = [],
  loadTable = () => {},
  headerWidths = [],
  page = '1',
  hasNexPage = 'false',
}) {
  const [widths, unit] = useTableHeaderWidth(tableHeaders, headerWidths);
  {
    /* <SettingSection
        title="Seçenekler"
        buttonTexts={['Görev Ekle']}
        buttonFunctions={[
          () => {
            alert('Görev buradan eklenir be güzelim.');
          },
        ]}
        buttonIcons={[<PlusCircleIcon className="w-6" />]}
      /> */
  }
  return (
    <div className="flex flex-col shadow-xl rounded-lg border border-gray-200 w-full">
      <TableHeader
        tableHeaders={tableHeaders}
        headerWidths={widths}
        unit={unit}
      />
      <div className="divide-y divide-gray-300">
        {tableItems.map((item) => (
          <TableRow
            key={item.id}
            rowItem={item}
            headerWidths={widths}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
}
