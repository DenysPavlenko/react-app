import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableFooter = (data, category) => {
  if (category === 'football') {
    return [
      <Typography component="h4" className="text-bold">Total:</Typography>,
      getTotal(data, 'wonLost'),
      getTotal(data, 'ofWagers'),
      getTotal(data, 'volume'),
      getTotal(data, 'averageBet'),
    ];
  } else {
    return [
      <Typography component="h4" className="text-bold">Total:</Typography>,
      getTotal(data, 'wonLost'),
      getTotal(data, 'ofWagers'),
      getTotal(data, 'averageBet'),
      getTotal(data, 'hold'),
    ];
  }
};

const getTotal = (data, name) => data && data.reduce((acc, item) => item[name] ? acc + parseInt(item[name]) : 0, 0).toFixed(2);

export default tableFooter;
