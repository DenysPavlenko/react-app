import React from 'react';
// Components
import RadioButton from 'components/radio-button';
import Checkbox from 'components/checkbox';

const accountStatusTable = (handleInput, { accountStatus, viewOnly }) => ([
  {
    title: 'Account Status',
    render: () => { }
  },
  {
    title: 'Open',
    render: ({ open }) => <RadioButton onChange={handleInput} name="accountStatus" value={open} checked={accountStatus === open} />,
  },
  {
    title: 'Closed',
    render: ({ closed }) => <RadioButton onChange={handleInput} name="accountStatus" value={closed} checked={accountStatus === closed} />,
  },
  {
    title: 'View only',
    render: data => <Checkbox onChange={handleInput} name={data.viewOnly} checked={viewOnly} />
  },
]);

const accountStatusData = [
  { title: '', open: 'open', closed: 'closed', viewOnly: 'viewOnly' },
];

export { accountStatusTable, accountStatusData };
