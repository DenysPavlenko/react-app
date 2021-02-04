import React from 'react';
// Components
import Typography from 'components/typography';
// Utils
import handleStatusClass from 'utils/handle-status-class';

const tableContent = () => {
  return [
    {
      title: 'Transaction',
      render: ({ type }) => <Typography component="p">{type}</Typography>
    },
    {
      title: 'Amount',
      render: ({ amount }) => <Typography component="p" className={handleStatusClass(amount)}>{amount}</Typography>
    },
    {
      title: 'Balance',
      render: ({ balance }) => <Typography component="p" className={handleStatusClass(balance)}>{balance}</Typography>
    },
  ];
};

export default tableContent;
