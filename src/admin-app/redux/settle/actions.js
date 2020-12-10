import SettleActionTypes from './types';
// Settle service
import SettleService from 'admin-app/services/settle-service';
const settleService = new SettleService();

const settleRequested = () => ({
  type: SettleActionTypes.FETCH_SETTLE_REQUEST
});
const settleLoaded = data => ({
  type: SettleActionTypes.FETCH_SETTLE_SUCCESS,
  payload: data
});
const sellteError = error => ({
  type: SettleActionTypes.FETCH_SETTLE_FAILURE,
  payload: error
});

export const fetchSettleData = () => dispatch => {
  dispatch(settleRequested());
  settleService.getSettle()
    .then(data => dispatch(settleLoaded(data)))
    .catch(error => dispatch(sellteError(error)))
};
