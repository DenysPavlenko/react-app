import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { clientLimitsRequested } from 'redux/client-limits/actions';
import { selectClientLimits } from 'redux/client-limits/selectors';
// Components
import Form from 'components/form';
import PrimaryTable from 'components/primary-table';
import LoadingOverlay from 'components/loading-overlay';
import Button from 'components/button';
// Tables
import { leftTableRows, leftTableData } from './left-table';
import { rightTableCols, rightTableData } from './right-table';
// Initial state
import initialState from './intitial-state';
// Styles
import './styles.sass';

const LimitsTab = ({ clientLimitsRequested, clientLimits: { loading, data, error }, clientId }) => {
  const [clientData, setClientData] = useState(initialState);

  useLayoutEffect(() => {
    clientLimitsRequested(clientId);
  }, [clientLimitsRequested, clientId]);

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
      <LoadingOverlay loading={loading} error={error} retry={() => clientLimitsRequested(clientId)} />
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
  clientLimitsRequested: PropTypes.func,
  clientLimits: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientLimits: selectClientLimits
});

const mapDispatchToProps = {
  clientLimitsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(LimitsTab);
