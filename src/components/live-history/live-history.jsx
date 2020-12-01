import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchLiveHistoryData } from 'redux/live-history/actions';
import { selectLiveHistory } from 'redux/live-history/selectors';
// Components
// import Spinner
import TicketTable from 'components/ticket-table/ticket-table';

const LiveHistory = ({ liveHistory, fetchLiveHistoryData }) => {

  useLayoutEffect(() => {
    fetchLiveHistoryData();
  }, [fetchLiveHistoryData]);

  return (
    <div className="live-hisoty">
      <TicketTable retry={fetchLiveHistoryData} title="Hisoty ticket" info={liveHistory} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  liveHistory: selectLiveHistory
});

const mapDispatchToProps = dispatch => ({
  fetchLiveHistoryData: () => dispatch(fetchLiveHistoryData())
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveHistory);
