import React from 'react';
// Components
import Typography from 'components/typography';
// Utils
import getTableTotal from 'utils/get-table-total';
import handleStatusClass from 'utils/handle-status-class';

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
  return <Typography component="p" className={handleStatusClass(total)}>{total}</Typography>
};

export default tableFooter;
