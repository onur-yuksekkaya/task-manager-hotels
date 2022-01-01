import React from 'react';

import Table from 'components/Table/Table';

import { dataMock, tableHeaders, headerWidths } from '../PlaceholderData';

export default function ActiveTable({
  setSelectedActiveItem,
  selectedActiveItem,
  activeTableActions,
}) {
  return (
    <>
      <Table
        tableActions={activeTableActions}
        tableHeaders={tableHeaders}
        tableItems={dataMock}
        headerWidths={headerWidths}
        selectedItem={selectedActiveItem}
        setSelectedItem={setSelectedActiveItem}
      />
    </>
  );
}
