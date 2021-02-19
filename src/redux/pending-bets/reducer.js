import { fetchState } from 'redux/_utils/fetch-state';
import PendingBetsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const pendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingBetsTypes.FETCH_PENDING_BETS_REQUEST:
      return fetchState('request');
    case PendingBetsTypes.FETCH_PENDING_BETS_SUCCESS:
      return fetchState('success', action.payload);
    case PendingBetsTypes.FETCH_PENDING_BETS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default pendingReducer;
