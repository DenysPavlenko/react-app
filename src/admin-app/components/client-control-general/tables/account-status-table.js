import React from 'react';
// Components
import RadioButton from 'shared/components/radio-button/radio-button';
import Checkbox from 'shared/components/checkbox/checkbox';

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
