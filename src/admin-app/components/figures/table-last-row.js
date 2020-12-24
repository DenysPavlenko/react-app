import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Button from 'shared/components/button/button';
// Utils
import getTableTotal from 'shared/utils/get-table-total';
import setDangerClass from 'shared/utils/set-danger-class';

const tableFooter = (data, agent, customers, handleAgentSelect) => {
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
    renderItem(data, 'credit'),
    renderItem(data, 'carry'),
    renderItem(data, 'mon'),
    renderItem(data, 'tue'),
    renderItem(data, 'wed'),
    renderItem(data, 'thu'),
    renderItem(data, 'fri'),
    renderItem(data, 'sat'),
    renderItem(data, 'sun'),
    renderItem(data, 'weekly'),
    renderItem(data, 'payments'),
    renderItem(data, 'pending'),
    renderItem(data, 'settle'),
    renderItem(data, 'balance'),
    renderItem(data, 'lcOnly'),
  ];
};

const renderItem = (data, name) => {
  const total = getTableTotal(data, name);
  return <Typography component="p" className={setDangerClass(total)}>{total}</Typography>
};

export default tableFooter;
