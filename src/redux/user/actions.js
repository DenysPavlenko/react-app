import UserTypes from './types';

export const userRequested = () => ({
  type: UserTypes.FETCH_USER_REQUEST
});
export const userLoaded = data => ({
  type: UserTypes.FETCH_USER_SUCCESS,
  payload: data
});
export const userError = error => ({
  type: UserTypes.FETCH_USER_FAILURE,
  payload: error
});
