import PendingActionTypes from './types';
import PendingService from 'admin-app/services/pending-service';
const pendingService = new PendingService();

const pendingRequested = () => ({
  type: PendingActionTypes.FETCH_PENDING_REQUEST
});
const pendingLoaded = data => ({
  type: PendingActionTypes.FETCH_PENDING_SUCCESS,
  payload: data
});
const pendingError = error => ({
  type: PendingActionTypes.FETCH_PENDING_FAILURE,
  payload: error
});

export const fetchPendingData = category => dispatch => {
  dispatch(pendingRequested());
  pendingService.getPending(category)
    .then(data => dispatch(pendingLoaded(data)))
    .catch(error => dispatch(pendingError(error)))
};
