import SettleTypes from './types';
import SettleService from 'services/settle-service';

const settleService = new SettleService();

const settleRequested = () => ({
  type: SettleTypes.FETCH_SETTLE_REQUEST
});
const settleLoaded = data => ({
  type: SettleTypes.FETCH_SETTLE_SUCCESS,
  payload: data
});
const settleError = error => ({
  type: SettleTypes.FETCH_SETTLE_FAILURE,
  payload: error
});

export const fetchSettleData = date => dispatch => {
  dispatch(settleRequested());
  settleService.getSettle(date)
    .then(data => dispatch(settleLoaded(data)))
    .catch(error => dispatch(settleError(error)))
};
