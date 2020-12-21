import React, { useState } from 'react';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './create-new-accounts.sass';

const CreateNewAccounts = () => {
  const [topInputs, setTopInputs] = useState({ prefix: 'test', number: '1' });
  const [totalInputs, setTotalInputs] = useState({ accounts: '2', password: '1', creditLimit: '1', wagerLimit: '1', deposit: '1' });
  const [data, setData] = useState([]);

  const handleTopInput = ({ target: { name, value } }) => setTopInputs(topInputs => ({ ...topInputs, [name]: value, }));
  const handleTotalInput = ({ target: { name, value } }) => {
    setTotalInputs(totalInputs => ({ ...totalInputs, [name]: value, }))
  };
  const handleInput = (account, { target: { name, value } }) => {
    setData(data => data.map(item => item.account === account ? { ...item, [name]: value } : item));
  };

  const handleCreateData = () => {
    const { accounts, password, creditLimit, wagerLimit, deposit } = totalInputs;
    const { prefix, number } = topInputs;
    const data = Array.from(Array(parseInt(accounts))).map((_, idx) => ({
      account: prefix + (number + idx),
      password,
      creditLimit,
      wagerLimit,
      deposit
    }));
    setData(data);
  };

  const inputs = [
    { value: totalInputs.accounts, name: 'accounts', type: 'number', placeholder: '#Accounts' },
    { value: totalInputs.password, name: 'password', type: 'text', placeholder: 'password' },
    { value: totalInputs.creditLimit, name: 'creditLimit', type: 'number', placeholder: 'Credit Limit' },
    { value: totalInputs.wagerLimit, name: 'wagerLimit', type: 'number', placeholder: 'Wager Limit' },
    { value: totalInputs.deposit, name: 'deposit', type: 'number', placeholder: 'Deposit' },
  ];

  return (
    <div className="create-new-accounts">
      <div className="create-new-accounts__top">
        <FormGroup className="create-new-accounts__top-item" label="Prefix:">
          <Input value={topInputs.prefix} name="prefix" type="text" onChange={handleTopInput} />
        </FormGroup>
        <FormGroup className="create-new-accounts__top-item" label="Number:">
          <Input value={topInputs.number} name="number" type="number" onChange={handleTopInput} />
        </FormGroup>
      </div>
      <div className="create-new-accounts__content">
        <div className="create-new-accounts__inputs">
          {inputs.map(({ value, name, type, placeholder }, idx) => (
            <div key={idx} className="create-new-accounts__input">
              <Input value={value} name={name} type={type} placeholder={placeholder} onChange={handleTotalInput} />
            </div>
          ))}
        </div>
        <div className="create-new-accounts__table">
          <PrimaryTable cols={tableContent(handleInput)} variant="light" data={data} />
        </div>
        <div className="create-new-accounts__footer">
          <Button variant="default" onClick={handleCreateData}>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAccounts;
