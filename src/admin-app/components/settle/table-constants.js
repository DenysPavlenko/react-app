import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableConstants = () => {
  return [
    {
      title: 'User ID',
      render: data => <Typography component="p">{data.id}</Typography>
    },
    {
      title: 'Name',
      render: data => <Typography component="p">{data.name}</Typography>
    },
    {
      title: 'Settle figure',
      render: data => <Typography component="p">{data.settleFigure}</Typography>
    },
    {
      title: 'Settled',
      render: data => <Typography component="p">{data.settled}</Typography>
    },
  ];
};

export default tableConstants
