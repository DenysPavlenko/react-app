import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientAccountingData } from 'redux/client-accounting/actions';
import { selectClientAccounting } from 'redux/client-accounting/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Typography from 'components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const AccountingTab = ({ fetchClientAccountingData, clientAccounting: { loading, data, error }, clientId }) => {
  useLayoutEffect(() => {
    fetchClientAccountingData(clientId)
  }, [fetchClientAccountingData, clientId]);

  return (
    <div className="accounting-tab">
      <div className="accounting-tab__title">
        <Typography className="h3">Accounting Task:</Typography>
      </div>
      <div className="accounting-tab__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchClientAccountingData(clientId)}
        />
      </div>
    </div>
  );
};

AccountingTab.propTypes = {
  fetchClientAccountingData: PropTypes.func,
  clientAccounting: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientAccounting: selectClientAccounting
});

const mapDispatchToProps = dispatch => ({
  fetchClientAccountingData: clientId => dispatch(fetchClientAccountingData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountingTab);
