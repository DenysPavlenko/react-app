import React from 'react';
// Components
import Typography from 'components/typography';

const tableContent = () => {
  return [
    {
      title: 'Username',
      render: ({ username }) => <Typography component="h5">{username}</Typography>
    },
    {
      title: 'Account',
      render: ({ account }) => <Typography component="h5">{account}</Typography>
    },
    {
      title: 'Game',
      render: ({ game }) => <Typography component="h5">{game}</Typography>
    },
    {
      title: 'Risk',
      render: ({ risk }) => <Typography component="h5">{risk}</Typography>
    },
    {
      title: 'Win',
      render: ({ win }) => <Typography component="h5">{win}</Typography>
    },
  ];
};

export default tableContent;
