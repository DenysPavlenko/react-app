import React, { useState, useRef, useEffect } from 'react';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Initial inputs
import { inputsTop, inputsTotal } from './initial-inputs';
// Helpers
import isInputValid from 'shared/utils/is-input-valid';
// Styles
import './create-accounts.sass';

const CreateAccounts = ({ prefix, number }) => {
  const createAccountsRef = useRef(null);
  const [topInputs, setTopInputs] = useState(inputsTop);
  const [totalInputs, setTotalInputs] = useState(inputsTotal);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTopInputs(inputs => ({ ...inputs, prefix, number }));
  }, [number, prefix]);

  const handleInputValidation = (func, { name, type, value }) => {
    func(inputs => ({
      ...inputs,
      [name]: value,
      [`${name}Invalid`]: inputs.formErrors && !isInputValid(type, value)
    }));
  };
  const handleTopInput = ({ target }) => handleInputValidation(setTopInputs, target);
  const handleTotalInput = ({ target, target: { name, value } }) => {
    handleInputValidation(setTotalInputs, target);
    setData(data => data.map(item => ({ ...item, [name]: value })));
  };
  const handleInput = (account, { target: { name, value } }) => {
    setData(data => data.map(item => item.account === account ? { ...item, [name]: value } : item));
  };

  const createData = () => {
    const { accounts, password, creditLimit, wagerLimit, deposit } = totalInputs;
    const { prefix, number } = topInputs;
    return Array.from(Array(parseInt(accounts))).map((_, idx) => ({
      account: prefix + (number + idx),
      password,
      creditLimit,
      wagerLimit,
      deposit
    }));
  };

  const handleSublmit = () => {
    let x = handleSubmitValidation(createAccountsRef, setTopInputs, 'prefix', 'number');
    let z = handleSubmitValidation(createAccountsRef, setTotalInputs, 'accounts', 'password', 'creditLimit', 'wagerLimit', 'deposit');
    if (!x && !z) {
      setData(createData());
    };
  };

  const handleSubmitValidation = (ref, func, ...names) => {
    const errors = {};
    names.forEach(name => {
      const input = ref.current.querySelector(`input[name="${name}"]`);
      const value = input.value;
      const type = input.type;
      errors[`${name}Invalid`] = !isInputValid(type, value);
    });
    const hasErrors = Object.values(errors).some(error => error);
    func(inputs => ({ ...inputs, ...errors, formErrors: hasErrors }));
    return hasErrors;
  };

  const inputs = [
    { value: totalInputs.accounts, name: 'accounts', type: 'number', placeholder: '#Accounts' },
    { value: totalInputs.password, name: 'password', type: 'text', placeholder: 'Password' },
    { value: totalInputs.creditLimit, name: 'creditLimit', type: 'number', placeholder: 'Credit Limit' },
    { value: totalInputs.wagerLimit, name: 'wagerLimit', type: 'number', placeholder: 'Wager Limit' },
    { value: totalInputs.deposit, name: 'deposit', type: 'number', placeholder: 'Deposit' },
  ];

  return (
    <div className="create-accounts" ref={createAccountsRef}>
      <div className="create-accounts__top">
        <FormGroup className="create-accounts__top-item" label="Prefix:">
          <Input value={topInputs.prefix} name="prefix" type="text" invalid={topInputs.prefixInvalid} onChange={handleTopInput} />
        </FormGroup>
        <FormGroup className="create-accounts__top-item" label="Number:">
          <Input value={topInputs.number} name="number" type="number" invalid={topInputs.numberInvalid} onChange={handleTopInput} />
        </FormGroup>
      </div>
      <div className="create-accounts__content">
        <div className="create-accounts__inputs">
          {inputs.map(({ value, name, type, placeholder }, idx) => (
            <div key={idx} className="create-accounts__input">
              <Input value={value} name={name} type={type} placeholder={placeholder} invalid={totalInputs[`${name}Invalid`]} onChange={handleTotalInput} />
            </div>
          ))}
        </div>
        <div className="create-accounts__table">
          <PrimaryTable
            cols={tableContent(handleInput)}
            data={data}
          />
        </div>
        <div className="create-accounts__footer">
          <Button variant="default" onClick={handleSublmit}>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccounts;
