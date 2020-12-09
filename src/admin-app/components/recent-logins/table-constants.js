import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableConstants = () => {
  return [
    {
      title: 'Date / Time',
      render: rowData => {
        return <Typography component="h5">{rowData.date}</Typography>
      },
    },
    {
      title: 'Ip Address',
      render: rowData => {
        return <Typography component="h5">{rowData.ip}</Typography>
      },
    },
  ];
};

export default tableConstants;
