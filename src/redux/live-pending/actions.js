import LivePendingActionTypes from './types';
// Services
import LivePendingService from 'services/live-pending-service';
// Games service
const livePendingService = new LivePendingService();

const livePendingRequested = () => ({
  type: LivePendingActionTypes.FETCH_LIVE_PENDING_REQUEST
});
const livePendingLoaded = data => ({
  type: LivePendingActionTypes.FETCH_LIVE_PENDING_SUCCESS,
  payload: data
});
const livePendingError = error => ({
  type: LivePendingActionTypes.FETCH_LIVE_PENDING_FAILURE,
  payload: error
});

export const fetchLivePendingData = () => (dispatch) => {
  dispatch(livePendingRequested());
  livePendingService.getLivePending()
    .then((data) => dispatch(livePendingLoaded(data)))
    .catch((error) => dispatch(livePendingError(error)))
};
