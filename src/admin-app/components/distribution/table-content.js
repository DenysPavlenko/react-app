import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import tableDangerClass from 'shared/utils/table-danger-class';


const tableContent = () => {
  return [
    {
      title: 'User ID',
      render: data => <Typography component="p">{data.id}</Typography>
    },
    {
      title: 'Active',
      render: data => <Typography component="p" className={tableDangerClass(data.active)}>0</Typography>
    },
    {
      title: 'Split',
      render: data => <Typography component="p" className={tableDangerClass(data.split)}>{data.split}</Typography>
    },
    {
      title: 'Net',
      render: data => <Typography component="p" className={tableDangerClass(data.net)}>{data.net}</Typography>
    },
    {
      title: 'Agent Commission',
      render: data => <Typography component="p" className={tableDangerClass(data.agentCommission)}>{data.agentCommission}</Typography>
    },
    {
      title: 'Master Commission',
      render: data => <Typography component="p" className={tableDangerClass(data.masterCommission)}>{data.masterCommission}</Typography>
    },
    {
      title: 'Previous Balance',
      render: data => <Typography component="p" className={tableDangerClass(data.previousBalance)}>{data.previousBalance}</Typography>
    },
    {
      title: 'Payments',
      render: data => <Typography component="p" className={tableDangerClass(data.payments)}>{data.payments}</Typography>
    },
    {
      title: 'New Balance',
      render: data => <Typography component="p" className={tableDangerClass(data.newBalance)}>{data.newBalance}</Typography>
    },
    {
      title: 'P&C',
      render: data => <Typography component="p" className={tableDangerClass(data.pc)}>{data.pc}</Typography>
    },
    {
      title: 'Transactions',
      render: data => <Typography component="p" className={tableDangerClass(data.transactions)}>{data.transactions}</Typography>
    },
  ];
};

export default tableContent;
