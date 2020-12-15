import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = () => {
  return [
    {
      title: 'Date',
      render: data => {
        return <Typography component="p">{data.date}</Typography>
      },
    },
    {
      title: 'Description',
      render: data => {
        return <Typography component="p">{data.description}</Typography>
      },
    },
    {
      title: 'Source',
      render: data => {
        return <Typography component="p">{data.source}</Typography>
      },
    },
    {
      title: 'Amount',
      render: data => {
        return <Typography component="p">{data.amount}</Typography>
      },
    },
  ];
};

export default tableContent;
