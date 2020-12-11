import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchClientGeneralData } from 'admin-app/redux/client-general/actions';
import { selectClientGeneral } from 'admin-app/redux/client-general/selectors';
// Components
import LoadingOverlay from 'shared/components/loading-overlay/loading-overlay';
import Form from 'shared/components/form/form';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Select from 'shared/components/select/select';
import Textarea from 'shared/components/textarea/textarea';
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Styles
import './client-control-general.sass';
import { statusTable, statusTableData } from './status-table';

const initialState = {
  name: '',
  password: '',
  referedBy: '',
  home: '',
  email: '',
  mobile: '',
  wagerAlerts: '',
  rating: '',
  privateNotes: '',
  accountStatus: '',
  viewOnly: false,
  sportCallAccess: false,
  sportInternetAccess: false,
  liveSportCallAccess: false,
  liveSportInternetAccess: false,
  horsesCallAccess: false,
  horsesInternetAccess: false,
  straightGamesFreePlayAcc: false,
  straightContestsFreePlayAcc: false,
  parlayFreePlayAcc: false,
  teaserFreePlayAcc: false
};

const ClientControlGeneral = ({ fetchClientGeneralData, clientGeneral: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    fetchClientGeneralData(clientId);
  }, [fetchClientGeneralData, clientId]);

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
      <LoadingOverlay loading={loading} error={error} retry={fetchClientGeneralData} />
      <Form className="client-control-general" onSubmit={handleSubmit}>
        <div className="client-control-general__content">
          <div className="client-control-general__left">
            <Typography component="h2" className="client-control-general__title">Personal Settings</Typography>
            <div className="client-control-general__item">
              <FormGroup label="Name">
                <Input type="text" value={name} name="name" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Mobile">
                <Input type="phone" value={mobile} name="mobile" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="client-control-general__item">
              <FormGroup label="Email">
                <Input type="email" value={email} name="email" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Password">
                <Input type="text" value={password} name="password" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="client-control-general__item">
              <FormGroup label="Referred By">
                <Input type="text" value={referedBy} name="referedBy" onChange={handleInput} variant="primary" />
              </FormGroup>
              <FormGroup label="Home">
                <Input type="text" value={home} name="home" onChange={handleInput} variant="primary" />
              </FormGroup>
            </div>
            <div className="client-control-general__item">
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
            <div className="client-control-general__item client-control-general__item--fluid">
              <FormGroup label="Private Notes: (Customers do not see this)">
                <Textarea rows="7" onChange={handleInput} name="privateNotes" variant="primary" value={privateNotes} />
              </FormGroup>
            </div>
          </div>
          <div className="client-control-general__right">
            <Typography component="h2" className="client-control-general__title">Account Status / Access</Typography>
            <PrimaryTable rows={statusTable(handleInput, clientData)} data={statusTableData} variant="primary" size="sm" center />
          </div>
        </div>
        <div className="client-control-general__footer">
          <Button variant="accent-blue" type="submit">Submit</Button>
        </div>
      </Form>
    </Fragment>
  );
};

ClientControlGeneral.propTypes = {
  clientGeneral: PropTypes.object,
  fetchClientGeneralData: PropTypes.func,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientGeneral: selectClientGeneral
});

const mapDispatchToProps = dispatch => ({
  fetchClientGeneralData: clientId => dispatch(fetchClientGeneralData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlGeneral);
