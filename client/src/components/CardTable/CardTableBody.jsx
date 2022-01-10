import React from 'react';
import CardTableItem from './CardTableItem';

export default function CardTableBody({
  tableItems,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <div className="h-full text-[10px] md:text-[12px] lg:text-[14px] flex gap-2 lg:gap-5 justify-center flex-wrap">
      {tableItems.length ? (
        tableItems.map((item, index) => (
          <CardTableItem
            key={index}
            tableItem={item}
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
