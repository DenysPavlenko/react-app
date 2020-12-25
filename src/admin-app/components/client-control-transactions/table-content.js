import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import ActionIcon from 'shared/components/action-icon/action-icon';

const tableContent = () => {
  return [
    {
      title: 'Actions',
      render: () => <ActionIcon icon="trash" color="danger" />
    },
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
