import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { myTransactionsRequested } from 'redux/my-transactions/actions';
import { selectMyTransactions } from 'redux/my-transactions/selectors';
// Components
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const MyTransactions = ({ myTransactions: { loading, data, error }, myTransactionsRequested }) => {
  useLayoutEffect(() => {
    myTransactionsRequested();
  }, [myTransactionsRequested]);

  return (
    <div className="my-transactions">
      <Typography component="h2" className="my-transactions__heading">My transactions</Typography>
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        retry={myTransactionsRequested}
        data={data}
        error={error}
      />
    </div>
  );
};

MyTransactions.propTypes = {
  myTransactions: PropTypes.object,
  myTransactionsRequested: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myTransactions: selectMyTransactions,
});

const mapDispatchToProps = {
  myTransactionsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTransactions);
