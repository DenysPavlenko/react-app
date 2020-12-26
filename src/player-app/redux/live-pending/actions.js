import LivePendingTypes from './types';
// Live pending service
import LivePendingService from 'player-app/services/live-pending-service';
const livePendingService = new LivePendingService();

const livePendingRequested = () => ({
  type: LivePendingTypes.FETCH_LIVE_PENDING_REQUEST
});
const livePendingLoaded = data => ({
  type: LivePendingTypes.FETCH_LIVE_PENDING_SUCCESS,
  payload: data
});
const livePendingError = error => ({
  type: LivePendingTypes.FETCH_LIVE_PENDING_FAILURE,
  payload: error
});

export const fetchLivePendingData = () => dispatch => {
  dispatch(livePendingRequested());
  livePendingService.getLivePending()
    .then(data => dispatch(livePendingLoaded(data)))
    .catch(error => dispatch(livePendingError(error)))
};
