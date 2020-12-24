import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import TrashBin from 'shared/components/trash-bin/trash-bin';

const tableContent = () => {
  return [
    {
      title: 'Actions',
      render: () => <TrashBin />
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
