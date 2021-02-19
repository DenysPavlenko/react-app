import { fetchState } from 'redux/_utils/fetch-state';
import ClientLimitsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientLimitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_REQUEST:
      return fetchState('request');
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_SUCCESS:
      return fetchState('success', action.payload);
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientLimitsReducer;
