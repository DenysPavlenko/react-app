import SettleActionTypes from './types';
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

export const fetchSettleData = date => dispatch => {
  dispatch(settleRequested());
  settleService.getSettle(date)
    .then(data => dispatch(settleLoaded(data)))
    .catch(error => dispatch(sellteError(error)))
};
