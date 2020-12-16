import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import StatusIcon from 'shared/components/status-icon/status-icon';

const tableConstants = history => {
  return [
    {
      title: 'User Id',
      render: user =>
        <Typography component="p" style={{ cursor: 'pointer' }} onClick={() => history.push(`/client-control-panel/${user.id}`)}>{user.id}</Typography>
    },
    {
      title: 'Name',
      render: user => <Typography component="p">{user.name}</Typography>
    },
    {
      title: 'Password',
      render: user => <Typography component="p">{user.password}</Typography>
    },
    {
      title: 'StatusOp/Clo',
      render: user => <StatusIcon status={user.status} />
    },
    {
      title: 'Settle',
      render: user => <Typography component="p">{user.settleFigure}</Typography>
    },
    {
      title: 'SportCC',
      render: user => <StatusIcon status={user.sportCC} />
    },
    {
      title: 'Int',
      render: user => <StatusIcon status={user.sportCCInt} />
    },
    {
      title: 'Live',
      render: user => <StatusIcon status={user.sportCCLive} />
    },
    {
      title: 'HorsesCC',
      render: user => <StatusIcon status={user.horsesCC} />
    },
    {
      title: 'Int',
      render: user => <StatusIcon status={user.horsesInt} />
    },
    {
      title: 'CasinoReg',
      render: user => <StatusIcon status={user.casinoReg} />
    },
    {
      title: 'Live',
      render: user => <StatusIcon status={user.casinoLive} />
    },
    {
      title: 'TempCredit',
      render: user => <Typography component="p">{user.tempCredit}</Typography>
    },
    {
      title: 'CCLimit',
      render: user => <Typography component="p">{user.CClimit}</Typography>
    },
    {
      title: 'FPBalance',
      render: user => <Typography component="p">{user.FPbalance}</Typography>
    },
    {
      title: 'intLimit',
      render: user => <Typography component="p">{user.intLimit}</Typography>
    },
    {
      title: 'Pending',
      render: user => <Typography component="p">{user.pending}</Typography>
    },
    {
      title: 'Last Wager',
      render: user => <Typography component="p">{user.lastWager}</Typography>
    },
    {
      title: 'Rating',
      render: user => <Typography component="p">{user.rating}</Typography>
    },
    {
      title: 'Credit',
      render: user => <Typography component="p">{user.credit}</Typography>
    },
    {
      title: 'Mobile',
      render: user => <Typography component="p">{user.mobile}</Typography>
    },
    {
      title: 'balance',
      render: user => <Typography component="p">{user.balance}</Typography>
    },
  ]
};

export default tableConstants;
