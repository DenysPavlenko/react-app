import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchTransactionsData } from 'admin-app/redux/transactions/actions';
import { selectTransactions } from 'admin-app/redux/transactions/selectors';
// Components
import Typography from 'shared/components/typography/typography';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import DataPreviewModal from 'admin-app/components/data-preview-modal/data-preview-modal';
// Table content
import tableContent from './table-content';

const Transactions = ({ agent, open, onClose, onExited, fetchTransactionsData, transactions: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchTransactionsData(agent);
  }, [fetchTransactionsData, agent]);

  return (
    <DataPreviewModal
      open={open}
      onClose={onClose}
      onExited={onExited}
      title={
        <Typography component="h3">Transactions for {agent}</Typography>
      }
      content={
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => fetchTransactionsData(agent)}
          data={data}
          error={error}
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total transactions: {data && data.length}</Typography>
      }
    />
  );
};

Transactions.propTypes = {
  agent: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  toggleTransactions: PropTypes.func,
  fetchTransactionsData: PropTypes.func,
  transactions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  transactions: selectTransactions,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionsData: agent => dispatch(fetchTransactionsData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
