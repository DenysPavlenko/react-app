import React from 'react';
// Components
import Typography from 'components/typography';

const tableContent = () => {
  return [
    {
      title: 'Date',
      render: data => <Typography component="p">{data.date}</Typography>
    },
    {
      title: 'Description',
      render: data => <Typography component="p">{data.description}</Typography>
    },
    {
      title: 'Source',
      render: data => <Typography component="p">{data.source}</Typography>
    },
    {
      title: 'Amount',
      render: data => <Typography component="p">{data.amount}</Typography>
    },
  ];
};

export default tableContent;
