import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAccountActivityData } from 'admin-app/redux/account-activity/actions';
import { selectAccountActivity } from 'admin-app/redux/account-activity/selectors';
// Components
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './account-activity.sass';

const AccountActivity = ({ agent, date, open, onClose, onExited, fetchAccountActivityData, accountActivity: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchAccountActivityData(agent, date);
  }, [fetchAccountActivityData, agent, date]);

  return (
    <Modal open={open} className="account-activity" onClose={onClose} noClose onExited={onExited} size="lg">
      <div className="account-activity__header">
        <Typography component="h3">Activity For December 22, 2020</Typography>
        <Close dark onClick={onClose} />
      </div>
      <div className="account-activity__content">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => fetchAccountActivityData(agent)}
          data={data}
          error={error}
        />
        {data &&
          <div className="account-activity__content-footer">
            <Typography component="h4" className="text-bold">Total customers: {data.length}</Typography>
          </div>
        }
      </div>
      <div className="account-activity__footer">
        <Button variant="danger" size="sm" onClick={onClose}>Close</Button>
      </div>
    </Modal>
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
  fetchAccountActivityData: (agent) => dispatch(fetchAccountActivityData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivity);
