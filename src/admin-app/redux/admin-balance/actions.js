import AdminBalanceActionTypes from './types';
import AdminBalanceService from 'admin-app/services/admin-balance-service';
const adminBalanceService = new AdminBalanceService();

const adminBalanceRequested = () => ({
  type: AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_REQUEST
});
const adminBalanceLoaded = data => ({
  type: AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_SUCCESS,
  payload: data
});
const adminBalanceError = error => ({
  type: AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_FAILURE,
  payload: error
});

export const fetchAdminBalanceData = () => (dispatch) => {
  dispatch(adminBalanceRequested());
  adminBalanceService.getAdminBalance()
    .then(data => dispatch(adminBalanceLoaded(data)))
    .catch(error => dispatch(adminBalanceError(error)))
};
