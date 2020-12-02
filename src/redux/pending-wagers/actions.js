import PendingWagersActionTypes from './types';
// Horses tracks service
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

export const fetchPendingWagersData = figure => (dispatch) => {
  dispatch(pendingWagersRequested());
  pendingWagersService.getPendingWagers(figure)
    .then(data => dispatch(pendingWagersLoaded(data)))
    .catch(error => dispatch(pendingWagersError(error)))
};
