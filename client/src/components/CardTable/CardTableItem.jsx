import React from 'react';

export default function CardTableItem({
  tableItem,
  selectedItem,
  setSelectedItem,
}) {
  const isSelected = selectedItem === tableItem.id;
  const selectedCardClass = isSelected ? 'border-indigo-700' : '';
  const selectedCardHeading = isSelected
    ? 'bg-indigo-500 group-hover:bg-indigo-400 text-white'
    : '';

  const toggleSelected = () => {
    isSelected ? setSelectedItem('') : setSelectedItem(tableItem.id);
  };
  return (
    <div
      className={`bg-white p-3 rounded-md border flex flex-col gap-y-3 basis-[47%] lg:basis-[40%] xl:basis-[30%] 2xl:basis-[23%] min-h-[12rem] shadow-md cursor-pointer duration-150 hover:shadow-xl group hover:border-indigo-300 active:translate-y-1 scale-90 lg:scale-100 ${selectedCardClass}`}
      onClick={toggleSelected}
    >
      <span
        className={`font-bold bg-gray-200 p-2 rounded-sm group-hover:bg-yellow-500 text-[1rem] ${selectedCardHeading}`}
      >
        {tableItem.title}
      </span>
      <span className="inline-block font-normal text-sm min-h-[7rem] max-h-[9rem] text-gray-600 mt-2 mb-7">
        {tableItem.description}
      </span>
      <div className="mt-auto inline-flex flex-col gap-y-3">
        <div className="inline-flex justify-between">
          <span className="px-2 py-1 font-semibold text-gray-600">Oda:</span>
          <span className="bg-orange-300 px-2 py-1 rounded-md font-bold text-xs inline-flex justify-center items-center">
            {tableItem.room_number}
          </span>
        </div>
        <div className="inline-flex">
          <span className="p-1 font-semibold text-gray-600">Görevli(ler):</span>
          <div className="py-1 inline-flex gap-1 ml-auto flex-wrap justify-end">
            {tableItem.assigned.map((worker, index) => (
              <span
                key={index}
                className="bg-green-300 px-2 py-1 rounded-md font-semibold text-xs inline-flex justify-center items-center basis-50"
              >
                {worker}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
