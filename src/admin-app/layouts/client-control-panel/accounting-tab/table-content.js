import React from 'react';
// Components
import Typography from 'shared/components/typography';

const tableContent = () => {
  return [
    {
      title: 'From',
      render: data => <Typography component="p">{data.from}</Typography>
    },
    {
      title: 'To',
      render: data => <Typography component="p">{data.to}</Typography>
    },
    {
      title: 'Trans type',
      render: data => <Typography component="p">{data.transType}</Typography>
    },
    {
      title: 'applied',
      render: data => <Typography component="p">{data.applied}</Typography>
    },
    {
      title: 'To apply',
      render: data => <Typography component="p">{data.applied}</Typography>
    },
  ];
};

export default tableContent
