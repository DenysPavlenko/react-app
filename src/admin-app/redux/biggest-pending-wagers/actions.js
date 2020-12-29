import BiggestPendingWagersTypes from './types';
import BiggestPendingWagersService from 'admin-app/services/biggest-pending-wagers-service/index';

const biggestPendingWagersService = new BiggestPendingWagersService();

const biggestPendingWagersRequested = () => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_REQUEST
});
const biggestPendingWagersLoaded = data => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_SUCCESS,
  payload: data
});
const biggestPendingWagersError = error => ({
  type: BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_FAILURE,
  payload: error
});

export const fetchBiggestPendingWagersData = () => dispatch => {
  dispatch(biggestPendingWagersRequested());
  biggestPendingWagersService.getBiggestPendingWagers()
    .then(data => dispatch(biggestPendingWagersLoaded(data)))
    .catch(error => dispatch(biggestPendingWagersError(error)))
};
