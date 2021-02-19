import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { clientAccountingRequested } from 'redux/client-accounting/actions';
import { selectClientAccounting } from 'redux/client-accounting/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Typography from 'components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const AccountingTab = ({ clientAccountingRequested, clientAccounting: { loading, data, error }, clientId }) => {
  useLayoutEffect(() => {
    clientAccountingRequested({ clientId })
  }, [clientAccountingRequested, clientId]);

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
          retry={() => clientAccountingRequested(clientId)}
        />
      </div>
    </div>
  );
};

AccountingTab.propTypes = {
  clientAccountingRequested: PropTypes.func,
  clientAccounting: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientAccounting: selectClientAccounting
});

const mapDispatchToProps = {
  clientAccountingRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountingTab);
