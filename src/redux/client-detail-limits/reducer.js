import { fetchState } from 'redux/_utils/fetch-state';
import ClientDetailLimitsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientDetailLimitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_REQUEST:
      return fetchState('request');
    case ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_SUCCESS:
      return fetchState('success', action.payload);
    case ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientDetailLimitsReducer;
