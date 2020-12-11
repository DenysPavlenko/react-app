import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientAccountingData } from 'admin-app/redux/client-accounting/actions';
import { selectClientAccounting } from 'admin-app/redux/client-accounting/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Typography from 'shared/components/typography/typography';
// Table constants
import tableConstants from './table-constants';
// Styles
import './client-control-accounting.sass';

const ClientControlAccounting = ({ fetchClientAccountingData, clientAccounting: { loading, data, error }, clientId }) => {
  useLayoutEffect(() => {
    fetchClientAccountingData(clientId)
  }, [fetchClientAccountingData, clientId]);

  return (
    <div className="client-control-accounting">
      <div className="client-control-accounting__title">
      <Typography className="h3">Accounting Task:</Typography>
      </div>
      <div className="client-control-accounting__table">
        <PrimaryTable cols={tableConstants()} loading={loading} data={data} error={error} retry={() => fetchClientAccountingData()} variant="dark" />
      </div>
    </div>
  );
};

ClientControlAccounting.propTypes = {
  fetchClientAccountingData: PropTypes.func,
  clientAccounting: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  clientAccounting: selectClientAccounting
});

const mapDispatchToProps = dispatch => ({
  fetchClientAccountingData: clientId => dispatch(fetchClientAccountingData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlAccounting);
