import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import getTableTotal from 'shared/utils/get-table-total';
import tableDangerClass from 'shared/utils/table-danger-class';

const tableFooter = (data, category) => {
  if (category === 'football') {
    return [
      <Typography component="h4" className="text-bold">Total:</Typography>,
      renderItem(data, 'wonLost'),
      renderItem(data, 'ofWagers'),
      renderItem(data, 'volume'),
      renderItem(data, 'averageBet'),
    ];
  } else {
    return [
      <Typography component="h4" className="text-bold">Total:</Typography>,
      renderItem(data, 'wonLost'),
      renderItem(data, 'ofWagers'),
      renderItem(data, 'averageBet'),
      renderItem(data, 'hold'),
    ];
  }
};

const renderItem = (data, name) => {
  const total = getTableTotal(data, name);
  return <Typography component="p" className={tableDangerClass(total)}>{total}</Typography>
};

export default tableFooter;
