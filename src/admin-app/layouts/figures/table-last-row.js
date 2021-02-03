import React from 'react';
// Components
import Typography from 'shared/components/typography';
import RowGroup from 'shared/components/row-group';
import Button from 'shared/components/button';
// Utils
import getTableTotal from 'shared/utils/get-table-total';
import handleStatusClass from 'shared/utils/handle-status-class';

const tableFooter = (accounts, agent, customers, handleModalOpen) => {
  return [
    <RowGroup>
      <Typography component="h4" className="text-bold">Total:</Typography>
      <Button
        variant="accent-blue"
        size="xs"
        disabled={parseInt(customers) === 0}
        onClick={() => parseInt(customers) !== 0 && handleModalOpen('acModal', { agent })}
      >
        {customers}
      </Button>
    </RowGroup>
    ,
    '',
    '',
    renderItem(accounts, 'credit'),
    renderItem(accounts, 'carry'),
    renderItem(accounts, 'mon'),
    renderItem(accounts, 'tue'),
    renderItem(accounts, 'wed'),
    renderItem(accounts, 'thu'),
    renderItem(accounts, 'fri'),
    renderItem(accounts, 'sat'),
    renderItem(accounts, 'sun'),
    renderItem(accounts, 'weekly'),
    renderItem(accounts, 'payments'),
    renderItem(accounts, 'pending'),
    renderItem(accounts, 'settle'),
    renderItem(accounts, 'balance'),
    renderItem(accounts, 'lcOnly'),
  ];
};

const renderItem = (accounts, name) => {
  const total = getTableTotal(accounts, name);
  return <Typography component="p" className={handleStatusClass(total)}>{total}</Typography>
};

export default tableFooter;
