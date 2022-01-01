import React from 'react';

export default function TableRow({
  rowItem,
  headerWidths,
  unit = '%',
  setSelectedItem,
  selectedItem,
}) {
  const values = Object.values(rowItem);

  const isSelected = rowItem.id === selectedItem;

  return (
    <div
      className={`flex px-5 odd:bg-white even:bg-gray-300 hover:bg-yellow-200  cursor-pointer duration-150 h-14 my-2 rounded-md shadow-lg ${
        isSelected
          ? 'odd:bg-green-300 even:bg-green-300 hover:bg-green-300'
          : ''
      }`}
      onClick={() => {
        isSelected ? setSelectedItem('') : setSelectedItem(rowItem.id);
      }}
    >
      {values.map((value, index) => {
        return (
          <span
            key={value}
            style={{ flexBasis: `${headerWidths[index]}${unit}` }}
            className="inline-flex items-center even:font-semibold"
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
