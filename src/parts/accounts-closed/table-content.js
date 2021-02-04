import React from 'react';
// Components
import Typography from 'components/typography';

const tableContent = () => {
  return [
    {
      title: '#',
      render: (_, idx) => <Typography component="p">{idx + 1}</Typography>
    },
    {
      title: 'User',
      render: ({ user }) => <Typography component="p">{user}</Typography>
    },
    {
      title: 'Description',
      render: ({ description }) => <Typography component="p">{description}</Typography>
    },
    {
      title: 'Date Time',
      render: ({ dateTime }) => <Typography component="p">{dateTime}</Typography>
    },
  ];
};

export default tableContent;
