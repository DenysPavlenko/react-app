import UserTypes from './types';
// Casino games service
import UserService from 'shared/services/user-service';
const userService = new UserService();

const userRequested = () => ({
  type: UserTypes.FETCH_USER_REQUEST
});
const userLoaded = data => ({
  type: UserTypes.FETCH_USER_SUCCESS,
  payload: data
});
const userError = error => ({
  type: UserTypes.FETCH_USER_FAILURE,
  payload: error
});

export const fetchUserData = () => dispatch => {
  dispatch(userRequested());
  userService.getUser()
    .then(data => dispatch(userLoaded(data)))
    .catch(error => dispatch(userError(error)))
};
