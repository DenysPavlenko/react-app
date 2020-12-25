import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Button from 'shared/components/button/button';
// Utils
import getTableTotal from 'shared/utils/get-table-total';
import setDangerClass from 'shared/utils/set-danger-class';

const tableFooter = (accounts, agent, customers, handleAgentSelect) => {
  return [
    <RowGroup>
      <Typography component="h4" className="text-bold">Total:</Typography>
      <Button
        variant="accent-blue"
        size="xs"
        disabled={parseInt(customers) === 0}
        onClick={() => parseInt(customers) !== 0 && handleAgentSelect(agent)}
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
  return <Typography component="p" className={setDangerClass(total)}>{total}</Typography>
};

export default tableFooter;
