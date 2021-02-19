import { fetchState } from 'redux/_utils/fetch-state';
import ActivePlayersTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  ...fetchState('initial')
};

const activePlayersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActivePlayersTypes.TOGGLE_ACTIVE_PLAYERS:
      return {
        ...state,
        isActive: !state.isActive,
      };
    case ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_REQUEST:
      return {
        ...state,
        ...fetchState('request')
      };
    case ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_SUCCESS:
      return {
        ...state,
        ...fetchState('seccuess', action.payload)
      };
    case ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_FAILURE:
      return {
        ...state,
        ...fetchState('failure', action.payload)
      };
    default:
      return state;
  }
};

export default activePlayersReducer;
