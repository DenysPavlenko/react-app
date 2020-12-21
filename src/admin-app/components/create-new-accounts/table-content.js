import React from 'react';
// Components
import Input from 'shared/components/input/input';

const tableContent = handleInput => (
  [
    {
      style: { width: '20%', padding: '10px 15px' },
      title: 'Account',
      render: ({ name }) => <Input value={name} name="account" type="text" size="sm" disabled />
    },
    {
      style: { width: '20%', padding: '10px 15px' },
      title: 'Password',
      render: ({ account, password }) => <Input value={password} name="password" type="text" size="sm" onChange={(e) => handleInput(account, e)} />
    },
    {
      style: { width: '20%', padding: '10px 15px' },
      title: 'Credit Limit',
      render: ({ account, creditLimit }) => <Input value={creditLimit} name="creditLimit" type="number" size="sm" onChange={(e) => handleInput(account, e)} />
    },
    {
      style: { width: '20%', padding: '10px 15px' },
      title: 'Wager Limit',
      render: ({ account, wagerLimit }) => <Input value={wagerLimit} name="wagerLimit" type="number" size="sm" onChange={(e) => handleInput(account, e)} />
    },
    {
      style: { width: '20%', padding: '10px 15px' },
      title: 'Deposit',
      render: ({ account, deposit }) => <Input value={deposit} name="deposit" type="number" size="sm" onChange={(e) => handleInput(account, e)} />
    },
  ]
);

export default tableContent;
