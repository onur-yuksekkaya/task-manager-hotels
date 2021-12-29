import React from 'react';

export default function TableRow({ rowItem, headerWidths, unit = '%' }) {
  const values = Object.values(rowItem);
  return (
    <div className="flex px-5 my-1 bg-white hover:bg-gray-400 cursor-pointer duration-150">
      {values.map((value, index) => {
        return (
          <span
            key={value}
            style={{ flexBasis: `${headerWidths[index]}${unit}` }}
            className="h-12 inline-flex items-center "
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
