import ClientHistoryTypes from './types';

export const clientHistoryRequested = payload => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_REQUEST,
  payload
});
export const clientHistoryLoaded = data => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_SUCCESS,
  payload: data
});
export const clientHistoryError = error => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_FAILURE,
  payload: error
});
