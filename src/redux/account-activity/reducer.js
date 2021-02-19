import { fetchState } from 'redux/_utils/fetch-state';
import AccountActivityTypes from './types';

const INITIAL_STATE = fetchState('initial');

const accountActivitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_REQUEST:
      return fetchState('request');
    case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_SUCCESS:
      return fetchState('success', action.payload);
    case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default accountActivitiesReducer;
