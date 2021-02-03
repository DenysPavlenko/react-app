import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAccountActivityData } from 'admin-app/redux/account-activity/actions';
import { selectAccountActivity } from 'admin-app/redux/account-activity/selectors';
// Components
import DataPreviewModal from 'admin-app/components/data-preview-modal';
import Typography from 'shared/components/typography';
import PrimaryTable from 'shared/components/primary-table';
// Table content
import tableContent from './table-content';

const AccountActivity = ({ agent, date, open, onClose, onExited, fetchAccountActivityData, accountActivity: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchAccountActivityData(agent, date);
  }, [fetchAccountActivityData, agent, date]);

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
          retry={() => fetchAccountActivityData(agent)}
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
  fetchAccountActivityData: PropTypes.func,
  accountActivity: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  accountActivity: selectAccountActivity,
});

const mapDispatchToProps = dispatch => ({
  fetchAccountActivityData: agent => dispatch(fetchAccountActivityData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivity);
