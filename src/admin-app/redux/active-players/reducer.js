import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ActivePlayersTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
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
        ...requestData()
      };
    case ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_SUCCESS:
      return {
        ...state,
        ...setData(action.payload)
      };
    case ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_FAILURE:
      return {
        ...state,
        ...setError(action.payload)
      };
    default:
      return state;
  }
};

export default activePlayersReducer;
