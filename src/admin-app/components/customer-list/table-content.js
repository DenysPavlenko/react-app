import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import StatusIcon from 'shared/components/status-icon/status-icon';

const tableContent = history => {
  return [
    {
      title: 'User ID',
      render: ({ id }) =>
        <Typography component="p" style={{ cursor: 'pointer' }} onClick={() => history.push(`/client-control-panel/${id}`)}>{id}</Typography>
    },
    {
      title: 'Name',
      render: ({ name }) => <Typography component="p">{name}</Typography>
    },
    {
      title: 'Password',
      render: ({ password }) => <Typography component="p">{password}</Typography>
    },
    {
      title: 'Status',
      render: ({ status }) => <StatusIcon status={status} />
    },
    {
      title: 'Settle',
      render: ({ settleFigure }) => <Typography component="p">{settleFigure}</Typography>
    },
    {
      title: 'SportCC',
      render: ({ sportCC }) => <StatusIcon status={sportCC} />
    },
    {
      title: 'Int',
      render: ({ sportCCInt }) => <StatusIcon status={sportCCInt} />
    },
    {
      title: 'Live',
      render: ({ sportCCLive }) => <StatusIcon status={sportCCLive} />
    },
    {
      title: 'HorsesCC',
      render: ({ horsesCC }) => <StatusIcon status={horsesCC} />
    },
    {
      title: 'Int',
      render: ({ horsesInt }) => <StatusIcon status={horsesInt} />
    },
    {
      title: 'Casino',
      render: ({ casino }) => <StatusIcon status={casino} />
    },
    {
      title: 'FPBalance',
      render: ({ FPbalance }) => <Typography component="p">{FPbalance}</Typography>
    },
    {
      title: 'Pending',
      render: ({ pending }) => <Typography component="p">{pending}</Typography>
    },
    {
      title: 'Last Wager',
      render: ({ lastWager }) => <Typography component="p">{lastWager}</Typography>
    },
    {
      title: 'Credit',
      render: ({ credit }) => <Typography component="p">{credit}</Typography>
    },
    {
      title: 'balance',
      render: ({ balance }) => <Typography component="p">{balance}</Typography>
    },
  ]
};

export default tableContent;
