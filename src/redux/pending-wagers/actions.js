import PendingWagersActionTypes from './types';
// Pending wagers service
import PendingWagersService from 'services/pending-wagers-service';
const pendingWagersService = new PendingWagersService();

const pendingWagersRequested = () => ({
  type: PendingWagersActionTypes.FETCH_PENDING_WAGERS_REQUEST
});
const pendingWagersLoaded = data => ({
  type: PendingWagersActionTypes.FETCH_PENDING_WAGERS_SUCCESS,
  payload: data
});
const pendingWagersError = error => ({
  type: PendingWagersActionTypes.FETCH_PENDING_WAGERS_FAILURE,
  payload: error
});

export const fetchPendingWagersData = () => (dispatch) => {
  dispatch(pendingWagersRequested());
  pendingWagersService.getPendingWagers()
    .then(data => dispatch(pendingWagersLoaded(data)))
    .catch(error => dispatch(pendingWagersError(error)))
};
