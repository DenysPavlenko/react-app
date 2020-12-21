import UserActionTypes from './types';
// Casino games service
import UserService from 'shared/services/user-service';
const userService = new UserService();

const userRequested = () => ({
  type: UserActionTypes.FETCH_USER_REQUEST
});
const userLoaded = data => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: data
});
const userError = error => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload: error
});

export const fetchUserData = () => dispatch => {
  dispatch(userRequested());
  userService.getUser()
    .then(data => dispatch(userLoaded(data)))
    .catch(error => dispatch(userError(error)))
};
