import DeletedWagersTypes from './types';

export const deletedWagersRequested = payload => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_REQUEST,
  payload
});
export const deletedWagersLoaded = data => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_SUCCESS,
  payload: data
});
export const deletedWagersError = error => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_FAILURE,
  payload: error
});
