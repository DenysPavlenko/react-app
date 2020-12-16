import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = () => {
  return [
    {
      title: 'User ID',
      render: data => <Typography component="p">{data.id}</Typography>
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
      render: data => <Typography component="p">{data.carry}</Typography>
    },
    {
      title: 'Mon',
      render: data => <Typography component="p">{data.mon}</Typography>
    },
    {
      title: 'Tue',
      render: data => <Typography component="p">{data.tue}</Typography>
    },
    {
      title: 'Wed',
      render: data => <Typography component="p">{data.wed}</Typography>
    },
    {
      title: 'Thu',
      render: data => <Typography component="p">{data.thu}</Typography>
    },
    {
      title: 'Fri',
      render: data => <Typography component="p">{data.fri}</Typography>
    },
    {
      title: 'Sat',
      render: data => <Typography component="p">{data.sat}</Typography>
    },
    {
      title: 'Sun',
      render: data => <Typography component="p">{data.sun}</Typography>
    },
    {
      title: 'Weekly',
      render: data => <Typography component="p">{data.weekly}</Typography>
    },
    {
      title: 'Payments',
      render: data => <Typography component="p">{data.payments}</Typography>
    },
    {
      title: 'Pending',
      render: data => <Typography component="p">{data.pending}</Typography>
    },
    {
      title: 'Settle',
      render: data => <Typography component="p">{data.settle}</Typography>
    },
    {
      title: 'Balance',
      render: data => <Typography component="p">{data.balance}</Typography>
    },
    {
      title: 'LC Only',
      render: data => <Typography component="p">{data.lcOnly}</Typography>
    },
    {
      title: 'Rating',
      render: data => <Typography component="p">{data.rating}</Typography>
    },
  ];
};

export default tableContent;
