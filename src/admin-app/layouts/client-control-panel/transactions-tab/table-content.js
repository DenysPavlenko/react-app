import React from 'react';
// Components
import Typography from 'shared/components/typography';
import ActionIcon from 'shared/components/action-icon';

const tableContent = handleDeleteClick => {
  return [
    {
      title: 'Actions',
      render: ({ id }) => <ActionIcon icon="trash" color="danger" onClick={() => handleDeleteClick(id)} />
    },
    {
      title: 'Date',
      render: ({ date }) => <Typography component="p">{date}</Typography>
    },
    {
      title: 'Description',
      render: ({ description }) => <Typography component="p">{description}</Typography>
    },
    {
      title: 'Source',
      render: ({ source }) => <Typography component="p">{source}</Typography>
    },
    {
      title: 'Amount',
      render: ({ amount }) => <Typography component="p">{amount}</Typography>
    },
  ];
};

export default tableContent;
