import React from 'react';
// Components
import Typography from 'shared/components/typography';

const tableContent = () => {
  return [
    {
      title: 'Session Number',
      render: data => <Typography component="p">{data.sessionNumber}</Typography>
    },
    {
      title: 'Date Time',
      render: data => <Typography component="p">{data.dateTime}</Typography>
    },
    {
      title: 'Details',
      render: data => <Typography component="p">{data.details}</Typography>
    },
  ]
};

export default tableContent;
