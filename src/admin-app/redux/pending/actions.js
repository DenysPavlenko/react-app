import PendingActionTypes from './types';
// Recent logins service
import PendingService from 'admin-app/services/pending';
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
  let service;
  if (category === 'games') { service = pendingService.getPendingGames; }
  else if (category === 'contest') { service = pendingService.getPendingContests; }
  else if (category === 'horses') { service = pendingService.getPendingHorses; }
  else if (category === 'open') { service = pendingService.getPendingOpen; }
  else if (category === 'free') { service = pendingService.getPendingFree; }
  else if (category === 'live') { service = pendingService.getPendingLive; }
  else { return; }
  dispatch(pendingRequested());
  service()
    .then(data => dispatch(pendingLoaded(data)))
    .catch(error => dispatch(pendingError(error)))
};
