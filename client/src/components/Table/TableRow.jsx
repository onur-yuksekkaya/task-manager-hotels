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
  const selectedRowClass = isSelected
    ? 'odd:bg-green-300 even:bg-green-300 hover:bg-green-300'
    : '';

  const toggleSelected = () => {
    isSelected ? setSelectedItem('') : setSelectedItem(rowItem.id);
  };
  return (
    <div
      className={`flex px-5 border border-transparent odd:bg-white even:bg-gray-300 hover:text-white hover:bg-indigo-500 cursor-pointer duration-150 h-14 my-2 rounded-md shadow-lg ${selectedRowClass}`}
      onClick={toggleSelected}
    >
      {values.map((value, index) => {
        return (
          <span
            key={index}
            style={{ flexBasis: `${headerWidths[index]}${unit}` }}
            className="inline-flex items-center "
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
