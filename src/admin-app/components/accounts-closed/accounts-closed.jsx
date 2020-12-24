import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAccountsClosedData, toggleAccountsClosed } from 'admin-app/redux/accounts-closed/actions';
import { selectAccountsClosed, selectShowAccountsClosed } from 'admin-app/redux/accounts-closed/selectors';
// Components
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './accounts-closed.sass';

const AccountsClosed = ({ toggleAccountsClosed, fetchAccountsClosedData, AccountsClosed: { loading, data, error }, showAccountsClosed }) => {

  useLayoutEffect(() => {
    showAccountsClosed && fetchAccountsClosedData();
  }, [fetchAccountsClosedData, showAccountsClosed]);

  return (
    <Modal open={showAccountsClosed} className="accounts-closed" onClose={toggleAccountsClosed} noClose size="lg">
      <div className="accounts-closed__header">
        <Typography component="h3">ZTMA - Accounts Closed</Typography>
        <Close dark onClick={toggleAccountsClosed} />
      </div>
      <div className="accounts-closed__content">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={fetchAccountsClosedData}
          data={data}
          error={error}
        />
        {data &&
          <div className="accounts-closed__content-footer">
            <Typography component="h4" className="text-bold">Total accounts closed: {data.length}</Typography>
          </div>
        }
      </div>
      <div className="accounts-closed__footer">
        <Button variant="danger" size="sm" onClick={toggleAccountsClosed}>Close</Button>
      </div>
    </Modal>
  );
};

AccountsClosed.propTypes = {
  toggleAccountsClosed: PropTypes.func,
  fetchAccountsClosedData: PropTypes.func,
  AccountsClosed: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AccountsClosed: selectAccountsClosed,
  showAccountsClosed: selectShowAccountsClosed,
});

const mapDispatchToProps = dispatch => ({
  fetchAccountsClosedData: () => dispatch(fetchAccountsClosedData()),
  toggleAccountsClosed: () => dispatch(toggleAccountsClosed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsClosed);
