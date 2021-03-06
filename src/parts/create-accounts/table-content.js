import React from 'react';
// Components
import Input from 'components/input';

const tableContent = handleInput => (
  [
    {
      style: { width: '20%', padding: '' },
      title: 'Account',
      render: ({ account }) => <Input value={account} name="account" type="text" size="sm" disabled variant="primary-light" />
    },
    {
      style: { width: '20%', padding: '' },
      title: 'Password',
      render: ({ account, password }) => <Input value={password} name="password" type="text" size="sm" onChange={(e) => handleInput(account, e)} variant="primary-light" />
    },
    {
      style: { width: '20%', padding: '' },
      title: 'Credit Limit',
      render: ({ account, creditLimit }) => <Input value={creditLimit} name="creditLimit" type="number" size="sm" onChange={(e) => handleInput(account, e)} variant="primary-light" />
    },
    {
      style: { width: '20%', padding: '' },
      title: 'Wager Limit',
      render: ({ account, wagerLimit }) => <Input value={wagerLimit} name="wagerLimit" type="number" size="sm" onChange={(e) => handleInput(account, e)} variant="primary-light" />
    },
    {
      style: { width: '20%', padding: '' },
      title: 'Deposit',
      render: ({ account, deposit }) => <Input value={deposit} name="deposit" type="number" size="sm" onChange={(e) => handleInput(account, e)} variant="primary-light" />
    },
  ]
);

export default tableContent;
