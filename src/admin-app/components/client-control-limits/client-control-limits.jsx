import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientLimitsData } from 'admin-app/redux/client-limits/actions';
import { selectClientLimits } from 'admin-app/redux/client-limits/selectors';
// Components
import Form from 'shared/components/form/form';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import LoadingOverlay from 'shared/components/loading-overlay/loading-overlay';
import Button from 'shared/components/button/button';
// Tables
import { leftTableRows, leftTableData } from './left-table';
import { rightTableCols, rightTableData } from './right-table';
// Initial state
import initialState from './intitial-state';
// Styles
import './client-control-limits.sass';

const ClientControlLimits = ({ fetchClientLimitsData, clientLimits: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    fetchClientLimitsData(clientId);
  }, [fetchClientLimitsData, clientId]);

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

  return (
    <Fragment>
      <LoadingOverlay loading={loading} error={error} retry={() => fetchClientLimitsData(clientId)} />
      <Form className="client-control-limits" onSubmit={handleSubmit}>
        <div className="client-control-limits__content">
          <div className="client-control-limits__left">
            <PrimaryTable rows={leftTableRows(handleInput, clientData)} data={leftTableData} variant="primary" aligned center />
          </div>
          <div className="client-control-limits__right">
            <PrimaryTable cols={rightTableCols(handleInput, clientData)} data={rightTableData} variant="primary" center />
          </div>
        </div>
        <div className="client-control-general__footer">
          <Button variant="accent-blue" type="submit">Submit</Button>
        </div>
      </Form>
    </Fragment>
  );
};

ClientControlLimits.propTypes = {
  fetchClientLimitsData: PropTypes.func,
  clientLimits: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientLimits: selectClientLimits
});

const mapDispatchToProps = dispatch => ({
  fetchClientLimitsData: clientId => dispatch(fetchClientLimitsData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlLimits);
