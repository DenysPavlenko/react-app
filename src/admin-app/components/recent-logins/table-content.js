import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = () => {
  return [
    {
      title: 'Date / Time',
      render: data => {
        return <Typography component="h5">{data.date}</Typography>
      },
    },
    {
      title: 'Ip Address',
      render: data => {
        return <Typography component="h5">{data.ip}</Typography>
      },
    },
  ];
};

export default tableContent;
