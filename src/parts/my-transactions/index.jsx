import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchMyTransactionsData } from 'redux/my-transactions/actions';
import { selectMyTransactions } from 'redux/my-transactions/selectors';
// Components
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const MyTransactions = ({ myTransactions: { loading, data, error }, fetchMyTransactionsData }) => {
  useLayoutEffect(() => {
    fetchMyTransactionsData();
  }, [fetchMyTransactionsData]);

  return (
    <div className="my-transactions">
      <Typography component="h2" className="my-transactions__heading">My transactions</Typography>
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        retry={fetchMyTransactionsData}
        data={data}
        error={error}
      />
    </div>
  );
};

MyTransactions.propTypes = {
  myTransactions: PropTypes.object,
  fetchMyTransactionsData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myTransactions: selectMyTransactions,
});

const mapDispatchToProps = dispatch => ({
  fetchMyTransactionsData: () => dispatch(fetchMyTransactionsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTransactions);
