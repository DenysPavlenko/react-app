import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchActiveCustomersData } from 'admin-app/redux/active-customers/actions';
import { selectActiveCustomers } from 'admin-app/redux/active-customers/selectors';
// Components
import DataPreviewModal from 'admin-app/components/data-preview-modal';
import Typography from 'shared/components/typography';
import PrimaryTable from 'shared/components/primary-table';
// Table content
import tableContent from './table-content';

const ActiveCustomers = ({ agent, open, onClose, onExited, fetchActiveCustomersData, activeCustomers: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchActiveCustomersData(agent);
  }, [fetchActiveCustomersData, agent]);

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
          retry={() => fetchActiveCustomersData(agent)}
          data={data}
          error={error}
          variant="primary-light"
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total active customers: {data && data.length}</Typography>
      }
    />
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
  fetchActiveCustomersData: agent => dispatch(fetchActiveCustomersData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCustomers);
