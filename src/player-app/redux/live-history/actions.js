import LiveHistoryActionTypes from './types';
// Live history service
import LiveHistoryService from 'player-app/services/live-history-service';
const liveHistoryService = new LiveHistoryService();

const liveHistoryRequested = () => ({
  type: LiveHistoryActionTypes.FETCH_LIVE_HISTORY_REQUEST
});
const liveHistoryLoaded = data => ({
  type: LiveHistoryActionTypes.FETCH_LIVE_HISTORY_SUCCESS,
  payload: data
});
const liveHistoryError = error => ({
  type: LiveHistoryActionTypes.FETCH_LIVE_HISTORY_FAILURE,
  payload: error
});

export const fetchLiveHistoryData = () => dispatch => {
  dispatch(liveHistoryRequested());
  liveHistoryService.getLiveHistory()
    .then(data => dispatch(liveHistoryLoaded(data)))
    .catch(error => dispatch(liveHistoryError(error)))
};
