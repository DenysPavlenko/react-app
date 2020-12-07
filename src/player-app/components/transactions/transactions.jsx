import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchTransactionsData } from 'player-app/redux/transactions/actions';
import { selectTransactions } from 'player-app/redux/transactions/selectors';
// Components
import Table from 'shared/components/table/table';
import TransactionsHeader from './transactions-header/transactions-header';
import TransactionsItem from './transactions-item/transactions-item';
import Typography from 'shared/components/typography/typography';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './transactions.sass';

const Transactions = ({ transactions: { loading, data, error }, fetchTransactionsData }) => {
  useLayoutEffect(() => {
    fetchTransactionsData();
  }, [fetchTransactionsData]);

  return (
    <div className="transactions">
      <Typography component="h2" className="transactions__heading">My transactions</Typography>
      {error && <div className="transactions__indicator"><ErrorIndicator retry={fetchTransactionsData} /></div>}
      {(!error && loading) && <div className="transactions__indicator"><Spinner boxed /></div>}
      {(!error && !loading) &&
        <div className="transactions__table-wrap">
          <Table className="transactions__table">
            <TransactionsHeader />
            <tbody>
              {data.map((props) => (
                <TransactionsItem className="transactions__table-item" key={props.id}  {...props} />
              ))}
            </tbody>
          </Table>
        </div>
      }
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
