import PendingBetsTypes from './types';

export const pendingBetsRequested = payload => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_REQUEST,
  payload
});
export const pendingBetsLoaded = data => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_SUCCESS,
  payload: data
});
export const pendingBetsError = error => ({
  type: PendingBetsTypes.FETCH_PENDING_BETS_FAILURE,
  payload: error
});
