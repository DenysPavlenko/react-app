import React from 'react';
// Components
import Typography from 'components/typography';
import StatusIcon from 'components/status-icon/status-icon';

const tableContent = () => {
  return [
    {
      title: '#',
      render: (_, idx) => <Typography component="p">{idx + 1}</Typography>
    },
    {
      title: 'Client Code',
      render: ({ clientCode }) => <Typography component="p">{clientCode}</Typography>
    },
    {
      title: 'Name',
      render: ({ name }) => <Typography component="p">{name}</Typography>
    },
    {
      title: 'Call Center',
      render: ({ callCenter }) => <StatusIcon status={callCenter} />
    },
    {
      title: 'Internet',
      render: ({ internet }) => <StatusIcon status={internet} />
    },
    {
      title: 'Live Sports',
      render: ({ liveSports }) => <StatusIcon status={liveSports} />
    },
    {
      title: 'Casino',
      render: ({ casino }) => <StatusIcon status={casino} />
    },
    {
      title: 'Live Casino',
      render: ({ liveCasino }) => <StatusIcon status={liveCasino} />
    },
  ];
};

export default tableContent;
