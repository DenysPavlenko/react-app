import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { transactionsRequested } from 'redux/transactions/actions';
import { selectTransactions } from 'redux/transactions/selectors';
// Components
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
import DataPreviewModal from 'components/data-preview-modal';
// Table content
import tableContent from './table-content';

const Transactions = ({ agent, open, onClose, onExited, transactionsRequested, transactions: { loading, data, error } }) => {

  useLayoutEffect(() => {
    transactionsRequested(agent);
  }, [transactionsRequested, agent]);

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
          retry={() => transactionsRequested(agent)}
          data={data}
          error={error}
          variant="primary-light"
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
  transactionsRequested: PropTypes.func,
  transactions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  transactions: selectTransactions,
});

const mapDispatchToProps = {
  transactionsRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
