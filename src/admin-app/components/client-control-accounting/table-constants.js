import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableConstants = () => {
  return [
    {
      title: 'From',
      render: data => {
        return <Typography component="p">{data.from}</Typography>
      },
    },
    {
      title: 'To',
      render: data => {
        return <Typography component="p">{data.to}</Typography>
      },
    },
    {
      title: 'Trans type',
      render: data => {
        return <Typography component="p">{data.transType}</Typography>
      },
    },
    {
      title: 'applied',
      render: data => {
        return <Typography component="p">{data.applied}</Typography>
      },
    },
    {
      title: 'To apply',
      render: data => {
        return <Typography component="p">{data.applied}</Typography>
      },
    },
  ];
};

export default tableConstants
