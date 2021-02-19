import ClientGeneralTypes from './types';

export const clientGeneralRequested = () => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_REQUEST
});
export const clientGeneralLoaded = data => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_SUCCESS,
  payload: data
});
export const clientGeneralError = error => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_FAILURE,
  payload: error
});
