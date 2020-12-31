import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';

const tableContent = () => {
  return [
    {
      title: 'Transaction',
      render: ({ type }) => <Typography component="p">{type}</Typography>
    },
    {
      title: 'Amount',
      render: ({ amount }) => <Typography component="p" className={setDangerClass(amount)}>{amount}</Typography>
    },
    {
      title: 'Balance',
      render: ({ balance }) => <Typography component="p" className={setDangerClass(balance)}>{balance}</Typography>
    },
  ];
};

export default tableContent;
