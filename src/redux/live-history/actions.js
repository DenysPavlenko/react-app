import LiveHistoryActionTypes from './types';
// Services
import LiveHistoryService from 'services/live-history-service';
// Games service
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

export const fetchLiveHistoryData = () => (dispatch) => {
  dispatch(liveHistoryRequested());
  liveHistoryService.getLiveHistory()
    .then((data) => dispatch(liveHistoryLoaded(data)))
    .catch((error) => dispatch(liveHistoryError(error)))
};
