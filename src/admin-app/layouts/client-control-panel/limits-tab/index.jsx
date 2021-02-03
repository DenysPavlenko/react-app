import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientLimitsData } from 'admin-app/redux/client-limits/actions';
import { selectClientLimits } from 'admin-app/redux/client-limits/selectors';
// Components
import Form from 'shared/components/form';
import PrimaryTable from 'shared/components/primary-table';
import LoadingOverlay from 'shared/components/loading-overlay';
import Button from 'shared/components/button';
// Tables
import { leftTableRows, leftTableData } from './left-table';
import { rightTableCols, rightTableData } from './right-table';
// Initial state
import initialState from './intitial-state';
// Styles
import './styles.sass';

const LimitsTab = ({ fetchClientLimitsData, clientLimits: { loading, data, error }, clientId }) => {
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
      <Form className="limits-tab" onSubmit={handleSubmit}>
        <div className="limits-tab__content">
          <div className="limits-tab__left">
            <PrimaryTable
              rows={leftTableRows(handleInput, clientData)}
              data={leftTableData}
              aligned
              center
            />
          </div>
          <div className="limits-tab__right">
            <PrimaryTable
              cols={rightTableCols(handleInput, clientData)}
              data={rightTableData}
              center
            />
          </div>
        </div>
        <div className="client-control-general__footer">
          <Button variant="accent-blue" type="submit">Submit</Button>
        </div>
      </Form>
    </Fragment>
  );
};

LimitsTab.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LimitsTab);
