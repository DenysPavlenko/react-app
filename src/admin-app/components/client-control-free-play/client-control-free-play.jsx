import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientFreePlayData } from 'admin-app/redux/client-free-play/actions';
import { selectClientFreePlay } from 'admin-app/redux/client-free-play/selectors';
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
import './client-control-free-play.sass';

const initialState = {
  transaction: 'free play deposit',
  amount: '0',
  briefDescription: '',
  privateNotes: '',
};

const ClientControlFreePlay = ({ fetchClientFreePlayData, clientFreePlay: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    fetchClientFreePlayData(clientId)
  }, [clientId, fetchClientFreePlayData]);

  const handleInput = ({ target: { name, value } }) => {
    setClientData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="client-control-free-play">
      <Form className="client-control-free-play__left" onSubmit={handleSubmit}>
        <FormGroup label="Transaction">
          <Select
            variant="primary"
            onChange={handleInput}
            value={clientData.transaction}
            name="transaction"
            options={[
              { label: 'Free Play Deposit', value: 'free play deposit' },
              { label: 'Free Play withdrawal', value: 'free play Withdrawal' },
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
      <div className="client-control-free-play__right">
        <PrimaryTable cols={tableContent()} loading={loading} data={data} error={error} retry={() => fetchClientFreePlayData(clientId)} variant="primary" />
      </div>
    </div>
  );
};

ClientControlFreePlay.propTypes = {
  fetchClientFreePlayData: PropTypes.func,
  clientFreePlay: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientFreePlay: selectClientFreePlay
});

const mapDispatchToProps = dispatch => ({
  fetchClientFreePlayData: clientId => dispatch(fetchClientFreePlayData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlFreePlay);
