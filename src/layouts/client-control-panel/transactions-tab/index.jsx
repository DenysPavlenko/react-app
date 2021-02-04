import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientTransactionsData } from 'redux/client-transactions/actions';
import { selectClientTransactions } from 'redux/client-transactions/selectors';
// Components
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Select from 'components/select';
import Textarea from 'components/textarea';
import Button from 'components/button';
import PrimaryTable from 'components/primary-table';
import DeleteConfirmation from 'parts/delete-confirmation';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const initialState = {
  transaction: 'withdrawal',
  amount: '0',
  briefDescription: '',
  privateNotes: '',
};

const TransactionsTab = ({ fetchClientTransactionsData, clientTransactions: { loading, data, error }, clientId }) => {
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
      <div className="transactions-tab">
        <Form className="transactions-tab__left" onSubmit={handleSubmit}>
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
        <div className="transactions-tab__right">
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

TransactionsTab.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTab);
