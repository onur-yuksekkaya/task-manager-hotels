import React from 'react';

import Table from 'components/Table/Table';

import { dataMock, tableHeaders, headerWidths } from '../PlaceholderData';

export default function HistoryTable({
  setSelectedHistoryItem,
  selectedHistoryItem,
  historyTableActions,
}) {
  return (
    <>
      <Table
        tableActions={historyTableActions}
        tableHeaders={tableHeaders}
        tableItems={dataMock}
        headerWidths={headerWidths}
        selectedItem={selectedHistoryItem}
        setSelectedItem={setSelectedHistoryItem}
      />
    </>
  );
}
