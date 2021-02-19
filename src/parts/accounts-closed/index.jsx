import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { accountsClosedRequested, toggleAccountsClosed } from 'redux/accounts-closed/actions';
import { selectAccountsClosed, selectShowAccountsClosed } from 'redux/accounts-closed/selectors';
// Components
import DataPreviewModal from 'components/data-preview-modal';
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';

const AccountsClosed = ({ toggleAccountsClosed, accountsClosedRequested, AccountsClosed: { loading, data, error }, showAccountsClosed }) => {

  useLayoutEffect(() => {
    showAccountsClosed && accountsClosedRequested();
  }, [accountsClosedRequested, showAccountsClosed]);

  return (
    <DataPreviewModal
      open={showAccountsClosed}
      onClose={toggleAccountsClosed}
      title={
        <Typography component="h3">ZTMA - Accounts Closed</Typography>
      }
      content={
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={accountsClosedRequested}
          data={data}
          error={error}
          variant="primary-light"
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total accounts closed: {data && data.length}</Typography>
      }
    />
  );
};

AccountsClosed.propTypes = {
  toggleAccountsClosed: PropTypes.func,
  accountsClosedRequested: PropTypes.func,
  AccountsClosed: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AccountsClosed: selectAccountsClosed,
  showAccountsClosed: selectShowAccountsClosed,
});

const mapDispatchToProps = {
  accountsClosedRequested,
  toggleAccountsClosed,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsClosed);
