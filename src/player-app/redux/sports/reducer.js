import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import SportsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const sportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsActionTypes.FETCH_SPORTS_REQUEST:
      return requestData();
    case SportsActionTypes.FETCH_SPORTS_SUCCESS:
      return setData(action.payload);
    case SportsActionTypes.FETCH_SPORTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default sportsReducer;
