import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import getTableTotal from 'shared/utils/get-table-total';
import setDangerClass from 'shared/utils/set-danger-class';

const tableFooter = data => {
  return [
    <Typography component="h4" className="text-bold">Total:</Typography>,
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
