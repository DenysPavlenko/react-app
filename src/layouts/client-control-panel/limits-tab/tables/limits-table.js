import React, { Fragment } from 'react';
// Components
import Typography from 'components/typography';
import Input from 'components/input';
import DatePicker from 'components/date-picker';

const limitsTable = (handleInput, clientData) => ([
  {
    title: 'Limits',
    render: data => <Typography component="p">{data.title}</Typography>
  },
  {
    title: '',
    render: ({ name }) => (
      <Fragment>
        {name !== 'until' ?
          <Input name={name} value={clientData[name]} onChange={handleInput} size="sm" variant="primary" width="50" />
          :
          <DatePicker name={name} value={clientData[name]} onChange={handleInput} size="sm" variant="primary" width="50" />
        }
      </Fragment>
    )
  },
]);

const limitsTableData = [
  { title: 'Credit Limit:', name: 'creditLimit' },
  { title: 'Temp Credit:', name: 'tempCredit' },
  { title: 'Until:', name: 'until' },
  { title: 'Settle:', name: 'settle' },
];

export { limitsTable, limitsTableData };
