import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPendingBetsData } from 'admin-app/redux/pending-bets/actions';
import { selectPendingBets } from 'admin-app/redux/pending-bets/selectors';
// Components
import DataPreviewModal from 'admin-app/components/data-preview-modal';
import Typography from 'shared/components/typography';
import PrimaryTable from 'shared/components/primary-table';
// Table content
import tableContent from './table-content';

const PendingBets = ({ agent, open, onClose, onExited, fetchPendingBetsData, pendingBets: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchPendingBetsData(agent);
  }, [fetchPendingBetsData, agent]);

  return (
    <DataPreviewModal
      open={open}
      onClose={onClose}
      onExited={onExited}
      size="xl"
      title={
        <Typography component="h3">Pending bets</Typography>
      }
      content={
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => fetchPendingBetsData(agent)}
          data={data}
          error={error}
          variant="primary-light"
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total pending bets: {data && data.length}</Typography>
      }
    />
  );
};

PendingBets.propTypes = {
  agent: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  togglePendingBets: PropTypes.func,
  fetchPendingBetsData: PropTypes.func,
  pendingBets: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pendingBets: selectPendingBets,
});

const mapDispatchToProps = dispatch => ({
  fetchPendingBetsData: agent => dispatch(fetchPendingBetsData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingBets);
