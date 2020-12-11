import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';

const restrictionsTable = (handleInput, clientData) => ([
  {
    title: 'Restrictions',
    render: data => <Typography component="p">{data.title}</Typography>
  },
  {
    title: '',
    render: ({ name }) => <Input name={name} value={clientData[name]} onChange={handleInput} size="sm" variant="primary" width="50" />
  },
]);

const restrictionsTableData = [
  { title: 'Straight Early Limit:', name: 'straightEarlyLimit' },
  { title: 'Overnight Limit:', name: 'overnightLimit' },
  { title: 'Max Contest Payout:', name: 'maxContestPayout' },
  { title: 'Max Contest Odds:', name: 'maxContestOdds' },
  { title: 'Min Contest Odds:', name: 'minContestOdds' },
];

export { restrictionsTable, restrictionsTableData };
