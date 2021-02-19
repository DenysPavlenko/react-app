import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { accountActivityRequested } from 'redux/account-activity/actions';
import { selectAccountActivity } from 'redux/account-activity/selectors';
// Components
import DataPreviewModal from 'components/data-preview-modal';
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';

const AccountActivity = ({ agent, date, open, onClose, onExited, accountActivityRequested, accountActivity: { loading, data, error } }) => {

  useLayoutEffect(() => {
    open && accountActivityRequested({ agent, date });
  }, [accountActivityRequested, agent, date, open]);

  return (
    <DataPreviewModal
      open={open}
      onClose={onClose}
      onExited={onExited}
      title={
        <Typography component="h3">Activity For December 22, 2020</Typography>
      }
      content={
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => accountActivityRequested(agent)}
          data={data}
          error={error}
          variant="primary-light"
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total customers: {data && data.length}</Typography>
      }
    />
  );
};

AccountActivity.propTypes = {
  agent: PropTypes.string,
  date: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  toggleAccountActivity: PropTypes.func,
  accountActivityRequested: PropTypes.func,
  accountActivity: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  accountActivity: selectAccountActivity,
});

const mapDispatchToProps = {
  accountActivityRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivity);
