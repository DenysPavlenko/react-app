import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
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
import DeleteConfirmation from 'shared/components/delete-confirmation/delete-confirmation';
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
  const [transactions, setTransactions] = useState(null);
  const [idToDelete, setIdToDelete] = useState(null);

  useLayoutEffect(() => {
    fetchClientTransactionsData(clientId);
  }, [clientId, fetchClientTransactionsData]);

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  const handleInput = ({ target: { name, value } }) => {
    setClientData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleDeleteClick = id => setIdToDelete(id);

  const handleDelete = () => {
    setTransactions(transactions => transactions.filter(({ id }) => id !== idToDelete));
    setIdToDelete(null);
  };

  return (
    <Fragment>
      <DeleteConfirmation
        open={idToDelete}
        onClose={() => setIdToDelete(false)}
        onConfirm={handleDelete}
        text="Are you sure do you want to delete this transaction?"
      />
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
          <PrimaryTable
            cols={tableContent(handleDeleteClick)}
            loading={loading}
            data={transactions}
            error={error}
            retry={() => fetchClientTransactionsData(clientId)}
          />
        </div>
      </div>
    </Fragment>
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
