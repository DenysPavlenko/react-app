import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import tableDangerClass from 'shared/utils/table-danger-class';

const tableContent = history => {

  return [
    {
      title: 'User ID',
      render: data =>
        <Typography component="p" style={{ cursor: 'pointer' }} onClick={() => history.push(`/client-control-panel/${data.id}`)}>{data.id}</Typography>
    },
    {
      title: 'Password',
      render: data => <Typography component="p">{data.password}</Typography>
    },
    {
      title: 'Name',
      render: data => <Typography component="p">{data.name}</Typography>
    },
    {
      title: 'Credit',
      render: data => <Typography component="p">{data.creditLimit}</Typography>
    },
    {
      title: 'Carry',
      render: data => <Typography component="p" className={tableDangerClass(data.carry)}>{data.carry}</Typography>
    },
    {
      title: 'Mon',
      render: data => <Typography component="p" className={tableDangerClass(data.mon)}>{data.mon}</Typography>
    },
    {
      title: 'Tue',
      render: data => <Typography component="p" className={tableDangerClass(data.tue)}>{data.tue}</Typography>
    },
    {
      title: 'Wed',
      render: data => <Typography component="p" className={tableDangerClass(data.wed)}>{data.wed}</Typography>
    },
    {
      title: 'Thu',
      render: data => <Typography component="p" className={tableDangerClass(data.thu)}>{data.thu}</Typography>
    },
    {
      title: 'Fri',
      render: data => <Typography component="p" className={tableDangerClass(data.fri)}>{data.fri}</Typography>
    },
    {
      title: 'Sat',
      render: data => <Typography component="p" className={tableDangerClass(data.sat)}>{data.sat}</Typography>
    },
    {
      title: 'Sun',
      render: data => <Typography component="p" className={tableDangerClass(data.sun)}>{data.sun}</Typography>
    },
    {
      title: 'Weekly',
      render: data => <Typography component="p" className={tableDangerClass(data.weekly)}>{data.weekly}</Typography>
    },
    {
      title: 'Payments',
      render: data => <Typography component="p" className={tableDangerClass(data.payments)}>{data.payments}</Typography>
    },
    {
      title: 'Pending',
      render: data => <Typography component="p" className={tableDangerClass(data.pending)}>{data.pending}</Typography>
    },
    {
      title: 'Settle',
      render: data => <Typography component="p" className={tableDangerClass(data.settle)}>{data.settle}</Typography>
    },
    {
      title: 'Balance',
      render: data => <Typography component="p" className={tableDangerClass(data.balance)}>{data.balance}</Typography>
    },
    {
      title: 'LC Only',
      render: data => <Typography component="p" className={tableDangerClass(data.lcOnly)}>{data.lcOnly}</Typography>
    },
    {
      title: 'Rating',
      render: data => <Typography component="p">{data.rating}</Typography>
    },
  ];
};

export default tableContent;
