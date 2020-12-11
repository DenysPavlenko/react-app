import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';

const limitsTable = (handleInput, clientData) => ([
  {
    title: 'Limits',
    render: data => <Typography component="p">{data.title}</Typography>
  },
  {
    title: '',
    render: ({ name }) => <Input name={name} value={clientData[name]} onChange={handleInput} size="sm" variant="primary" width="50" />
  },
]);

const limitsTableData = [
  { title: 'Credit Limit:', name: 'creditLimit' },
  { title: 'Temp Credit:', name: 'tempCredit' },
  { title: 'Until:', name: 'until' },
  { title: 'Settle:', name: 'settle' },
];

export { limitsTable, limitsTableData };
