import BiggestPendingWagersTypes from './types';

export const biggestPendingWagersRequested = () => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_REQUEST
});
export const biggestPendingWagersLoaded = data => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_SUCCESS,
  payload: data
});
export const biggestPendingWagersError = error => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_FAILURE,
  payload: error
});
