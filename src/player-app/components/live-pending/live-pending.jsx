import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchLivePendingData } from 'player-app/redux/live-pending/actions';
import { selectLivePending } from 'player-app/redux/live-pending/selectors';
// Components
// import Spinner
import TicketTable from 'player-app/components/ticket-table/ticket-table';

const LivePending = ({ livePending, fetchLivePendingData }) => {

  useLayoutEffect(() => {
    fetchLivePendingData();
  }, [fetchLivePendingData]);

  return (
    <div className="live-pending">
      <TicketTable retry={fetchLivePendingData} title="Pending ticket" info={livePending} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  livePending: selectLivePending
});

const mapDispatchToProps = dispatch => ({
  fetchLivePendingData: () => dispatch(fetchLivePendingData())
});

export default connect(mapStateToProps, mapDispatchToProps)(LivePending);
