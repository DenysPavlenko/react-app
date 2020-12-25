import AccountActivityTypes from './types';
import AccountActivityService from 'admin-app/services/account-activity-service';

const accountActivityService = new AccountActivityService();

const accountActivityRequested = () => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_REQUEST
});
const accountActivityLoaded = data => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_SUCCESS,
  payload: data
});
const accountActivityError = error => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_FAILURE,
  payload: error
});

export const fetchAccountActivityData = (agent, date) => dispatch => {
  dispatch(accountActivityRequested());
  accountActivityService.getAccountActivity(agent, date)
    .then(data => dispatch(accountActivityLoaded(data)))
    .catch(error => dispatch(accountActivityError(error)))
};
