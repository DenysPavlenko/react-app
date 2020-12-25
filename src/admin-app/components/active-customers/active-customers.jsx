import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchActiveCustomersData } from 'admin-app/redux/active-customers/actions';
import { selectActiveCustomers } from 'admin-app/redux/active-customers/selectors';
// Components
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './active-customers.sass';

const ActiveCustomers = ({ agent, open, onClose, onExited, fetchActiveCustomersData, activeCustomers: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchActiveCustomersData(agent);
  }, [fetchActiveCustomersData, agent]);

  return (
    <Modal open={open} className="active-customers" onClose={onClose} noClose onExited={onExited} size="lg">
      <div className="active-customers__header">
        <Typography component="h3">{agent} - Active Customers</Typography>
        <Close dark onClick={onClose} />
      </div>
      <div className="active-customers__content">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => fetchActiveCustomersData(agent)}
          data={data}
          error={error}
        />
        {data &&
          <div className="active-customers__content-footer">
            <Typography component="h4" className="text-bold">Total customers: {data.length}</Typography>
          </div>
        }
      </div>
      <div className="active-customers__footer">
        <Button variant="danger" size="sm" onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

ActiveCustomers.propTypes = {
  agent: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  toggleActiveCustomers: PropTypes.func,
  fetchActiveCustomersData: PropTypes.func,
  activeCustomers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  activeCustomers: selectActiveCustomers,
});

const mapDispatchToProps = dispatch => ({
  fetchActiveCustomersData: (agent) => dispatch(fetchActiveCustomersData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCustomers);
