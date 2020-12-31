import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchTransactionsData } from 'player-app/redux/transactions/actions';
import { selectTransactions } from 'player-app/redux/transactions/selectors';
// Components
import Typography from 'shared/components/typography/typography';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './transactions.sass';

const Transactions = ({ transactions: { loading, data, error }, fetchTransactionsData }) => {
  useLayoutEffect(() => {
    fetchTransactionsData();
  }, [fetchTransactionsData]);

  return (
    <div className="transactions">
      <Typography component="h2" className="transactions__heading">My transactions</Typography>
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        retry={fetchTransactionsData}
        data={data}
        error={error}
      />
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.object,
  fetchTransactionsData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  transactions: selectTransactions,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionsData: () => dispatch(fetchTransactionsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
