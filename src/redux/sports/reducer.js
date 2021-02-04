import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import SportsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const sportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsTypes.FETCH_SPORTS_REQUEST:
      return requestData();
    case SportsTypes.FETCH_SPORTS_SUCCESS:
      return setData(action.payload);
    case SportsTypes.FETCH_SPORTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default sportsReducer;
