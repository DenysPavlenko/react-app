import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import StatusIcon from 'shared/components/status-icon/status-icon';

const columns = history => [
  {
    title: 'User Id',
    render: data => (
      <Typography component="p" style={{ cursor: 'pointer' }} onClick={() => history.push('/client-control-panel')}>{data.id}</Typography>
    )
  },
  {
    title: 'Name',
    render: data => <Typography component="p">{data.name}</Typography>
  },
  {
    title: 'Password',
    render: data => <Typography component="p">{data.password}</Typography>
  },
  {
    title: 'StatusOp/Clo',
    render: data => <StatusIcon status={data.status} />
  },
  {
    title: 'Settle',
    render: data => <Typography component="p">{data.settleFigure}</Typography>
  },
  {
    title: 'SportCC',
    render: data => <StatusIcon status={data.sportCC} />
  },
  {
    title: 'Int',
    render: data => <StatusIcon status={data.sportCCInt} />
  },
  {
    title: 'Live',
    render: data => <StatusIcon status={data.sportCCLive} />
  },
  {
    title: 'HorsesCC',
    render: data => <StatusIcon status={data.horsesCC} />
  },
  {
    title: 'Int',
    render: data => <StatusIcon status={data.horsesInt} />
  },
  {
    title: 'CasinoReg',
    render: data => <StatusIcon status={data.casinoReg} />
  },
  {
    title: 'Live',
    render: data => <StatusIcon status={data.casinoLive} />
  },
  {
    title: 'TempCredit',
    render: data => <Typography component="p">{data.tempCredit}</Typography>
  },
  {
    title: 'CCLimit',
    render: data => <Typography component="p">{data.CClimit}</Typography>
  },
  {
    title: 'FPBalance',
    render: data => <Typography component="p">{data.FPbalance}</Typography>
  },
  {
    title: 'intLimit',
    render: data => <Typography component="p">{data.intLimit}</Typography>
  },
  {
    title: 'Pending',
    render: data => <Typography component="p">{data.pending}</Typography>
  },
  {
    title: 'Last Wager',
    render: data => <Typography component="p">{data.lastWager}</Typography>
  },
  {
    title: 'Rating',
    render: data => <Typography component="p">{data.rating}</Typography>
  },
  {
    title: 'Credit',
    render: data => <Typography component="p">{data.credit}</Typography>
  },
  {
    title: 'Mobile',
    render: data => <Typography component="p">{data.mobile}</Typography>
  },
  {
    title: 'balance',
    render: data => <Typography component="p">{data.balance}</Typography>
  },
]

const tableConstants = (history, tableTitles) => {
  return columns(history).filter(({ title }) => tableTitles.includes(title.toLowerCase()));
};

export default tableConstants;
