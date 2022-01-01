import React from 'react';

export default function TableHeader({
  tableHeaders,
  headerWidths,
  unit = '%',
}) {
  return (
    <div className="bg-indigo-700 h-10 w-full text-white font-bold text-[12px] lg:text-[14px] inline-flex justify-center items-center px-5 shrink-0 rounded-md">
      {tableHeaders.map((headerItem, index) => {
        return (
          <span style={{ flexBasis: `${headerWidths[index]}${unit}` }}>
            {headerItem}
          </span>
        );
      })}
    </div>
  );
}
