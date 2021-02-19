import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { activeCustomersRequested } from 'redux/active-customers/actions';
import { selectActiveCustomers } from 'redux/active-customers/selectors';
// Components
import DataPreviewModal from 'components/data-preview-modal';
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';

const ActiveCustomers = ({ agent, open, onClose, onExited, activeCustomersRequested, activeCustomers: { loading, data, error } }) => {

  useLayoutEffect(() => {
    open && activeCustomersRequested({ agent });
  }, [activeCustomersRequested, agent, open]);

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
          retry={() => activeCustomersRequested(agent)}
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
  activeCustomersRequested: PropTypes.func,
  activeCustomers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  activeCustomers: selectActiveCustomers,
});

const mapDispatchToProps = {
  activeCustomersRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCustomers);
