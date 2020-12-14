import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientTransactionsData } from 'admin-app/redux/client-transactions/actions';
import { selectClientTransactions } from 'admin-app/redux/client-transactions/selectors';
// Components
import Form from 'shared/components/form/form';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Select from 'shared/components/select/select';
import Textarea from 'shared/components/textarea/textarea';
import Button from 'shared/components/button/button';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './client-control-transactions.sass';

const initialState = {
  transaction: 'withdrawal',
  amount: '0',
  briefDescription: '',
  privateNotes: '',
};

const ClientControlTransactions = ({ fetchClientTransactionsData, clientTransactions: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    fetchClientTransactionsData(clientId)
  }, [clientId, fetchClientTransactionsData]);

  const handleInput = ({ target: { name, value, checked, type } }) => {
    setClientData(data => ({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="client-control-transactions">
      <Form className="client-control-transactions__left" onSubmit={handleSubmit}>
        <FormGroup label="Transaction">
          <Select
            variant="primary"
            onChange={handleInput}
            value={clientData.transaction}
            name="transaction"
            options={[
              { label: 'Withdrawal', value: 'withdrawal' },
              { label: 'Deposit', value: 'deposit' },
              { label: 'Win adjustment', value: 'win adjustment' },
              { label: 'Loss adjustment', value: 'loss adjustment' },
              { label: 'Bad debt', value: 'Bad debt' },
            ]}
          />
        </FormGroup>
        <FormGroup label="Amount">
          <Input type="text" value={clientData.amount} name="amount" onChange={handleInput} variant="primary" />
        </FormGroup>
        <FormGroup label="Brief Description">
          <Input type="text" value={clientData.briefDescription} name="briefDescription" onChange={handleInput} variant="primary" />
        </FormGroup>
        <FormGroup label="Private Notes: (Customers do not see this)">
          <Textarea rows="7" onChange={handleInput} name="privateNotes" variant="primary" value={clientData.privateNotes} />
        </FormGroup>
        <FormGroup>
          <Button variant="accent-blue" type="submit">Submit</Button>
        </FormGroup>
      </Form>
      <div className="client-control-transactions__right">
        <PrimaryTable cols={tableContent()} loading={loading} data={data} error={error} retry={() => fetchClientTransactionsData(clientId)} variant="primary" size="sm" />
      </div>
    </div>
  );
};

ClientControlTransactions.propTypes = {
  fetchClientTransactionsData: PropTypes.func,
  clientTransactions: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientTransactions: selectClientTransactions
});

const mapDispatchToProps = dispatch => ({
  fetchClientTransactionsData: clientId => dispatch(fetchClientTransactionsData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlTransactions);
