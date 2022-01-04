import React from 'react';
import TableRow from './TableRow';

export default function TableBody({
  tableItems,
  headerWidths,
  unit,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <div className="h-full text-[10px] md:text-[12px] lg:text-[14px]">
      {tableItems.length ? (
        tableItems.map((item) => (
          <TableRow
            key={item.id}
            rowItem={item}
            headerWidths={headerWidths}
            unit={unit}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))
      ) : (
        <div className="w-full text-center my-10">Liste boş</div>
      )}
    </div>
  );
}
