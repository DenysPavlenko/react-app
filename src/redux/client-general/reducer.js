import { fetchState } from 'redux/_utils/fetch-state';
import ClientGeneralTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientGeneralReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientGeneralTypes.FETCH_CLIENT_GENERAL_REQUEST:
      return fetchState('request');
    case ClientGeneralTypes.FETCH_CLIENT_GENERAL_SUCCESS:
      return fetchState('success', action.payload);
    case ClientGeneralTypes.FETCH_CLIENT_GENERAL_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientGeneralReducer;
