import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { clientGeneralRequested } from 'redux/client-general/actions';
import { selectClientGeneral } from 'redux/client-general/selectors';
// Components
import LoadingOverlay from 'components/loading-overlay';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Select from 'components/select';
import Textarea from 'components/textarea';
import Typography from 'components/typography';
import Button from 'components/button';
import PrimaryTable from 'components/primary-table';
// Initial state
import initialState from './initial-state';
// Styles
import './styles.sass';
// Table
import { statusTable, statusTableData } from './status-table';

const GeneralTab = ({ clientGeneralRequested, clientGeneral: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    clientGeneralRequested(clientId);
  }, [clientGeneralRequested, clientId]);

  useEffect(() => {
    data && setClientData(data)
  }, [data]);

  const handleInput = ({ target: { name, value, checked, type } }) => {
    setClientData(data => ({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const { name, password, referedBy, home, email, mobile, wagerAlerts, rating, privateNotes } = clientData;

  return (
    <Fragment>
      <LoadingOverlay loading={loading} error={error} retry={() => clientGeneralRequested(clientId)} />
      <Form className="general-tab" onSubmit={handleSubmit}>
        <div className="general-tab__content">
          <div className="general-tab__left">
            <Typography component="h2" className="general-tab__title">Personal Settings</Typography>
            <div className="general-tab__item">
              <FormGroup label="Name">
                <Input type="text" value={name} name="name" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Mobile">
                <Input type="phone" value={mobile} name="mobile" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="general-tab__item">
              <FormGroup label="Email">
                <Input type="email" value={email} name="email" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Password">
                <Input type="text" value={password} name="password" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="general-tab__item">
              <FormGroup label="Referred By">
                <Input type="text" value={referedBy} name="referedBy" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Home">
                <Input type="text" value={home} name="home" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="general-tab__item">
              <FormGroup label="Wager Alerts">
                <Input type="text" value={wagerAlerts} name="wagerAlerts" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Rating">
                <Select
                  variant="primary"
                  onChange={handleInput}
                  value={rating}
                  name="rating"
                  options={[
                    { label: 'None', value: 'none' },
                    { label: 'Bronze', value: 'bronze' },
                    { label: 'Silver', value: 'silver' },
                    { label: 'Diamond', value: 'diamond' },
                    { label: 'Gold', value: 'gold' },
                  ]}
                />
              </FormGroup>
            </div>
            <div className="general-tab__item general-tab__item--fluid">
              <FormGroup label="Private Notes: (Customers do not see this)">
                <Textarea rows="7" onChange={handleInput} name="privateNotes" variant="primary" value={privateNotes} />
              </FormGroup>
            </div>
          </div>
          <div className="general-tab__right">
            <Typography component="h2" className="general-tab__title">Account Status / Access</Typography>
            <PrimaryTable
              rows={statusTable(handleInput, clientData)}
              data={statusTableData}
              center
            />
          </div>
        </div>
        <div className="general-tab__footer">
          <Button variant="accent-blue" type="submit">Submit</Button>
        </div>
      </Form>
    </Fragment>
  );
};

GeneralTab.propTypes = {
  clientGeneral: PropTypes.object,
  clientGeneralRequested: PropTypes.func,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientGeneral: selectClientGeneral
});

const mapDispatchToProps = {
  clientGeneralRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralTab);
