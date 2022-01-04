import React from 'react';
import TableButton from './TableButton';

export default function TableActionRow({
  tableActions,
  selectedItem,
  isAdminViewing,
}) {
  return (
    <div className="flex gap-x-2 justify-center items-center lg:justify-end h-10 my-2">
      {tableActions.map((item, index) => {
        if (!!selectedItem || !item.showOnlySelect) {
          if (
            (!!selectedItem && item.isAdminControlled === isAdminViewing) ||
            isAdminViewing
          ) {
            return (
              <TableButton
                key={index}
                icon={item.icon}
                onClick={item.action}
                text={item.text}
              />
            );
          }
        }
      })}
    </div>
  );
}
