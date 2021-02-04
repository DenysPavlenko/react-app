import React from 'react';
// Components
import Typography from 'components/typography';

const tableContent = () => {
  return [
    {
      title: 'Date',
      render: ({ date }) => <Typography component="p">{date}</Typography>
    },
    {
      title: 'Amount',
      render: ({ amount }) => <Typography component="p">{amount}</Typography>
    },
    {
      title: 'Description',
      render: ({ description }) => <Typography component="p">{description}</Typography>
    },
  ];
};

export default tableContent;
