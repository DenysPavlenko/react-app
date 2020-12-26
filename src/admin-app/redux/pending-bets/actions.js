import PendingBetsTypes from './types';
import PendingBetsService from 'admin-app/services/pending-bets-service';
const pendingBetsService = new PendingBetsService();

const pendingBetsRequested = () => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_REQUEST
});
const pendingBetsLoaded = data => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_SUCCESS,
  payload: data
});
const pendingBetsError = error => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_FAILURE,
  payload: error
});

export const fetchPendingBetsData = agent => dispatch => {
  dispatch(pendingBetsRequested());
  pendingBetsService.getPendingBets(agent)
    .then(data => dispatch(pendingBetsLoaded(data)))
    .catch(error => dispatch(pendingBetsError(error)))
};
