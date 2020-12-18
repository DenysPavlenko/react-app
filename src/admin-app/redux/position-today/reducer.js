import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import PositionTodayActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionTodayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionTodayActionTypes.FETCH_POSITION_TODAY_REQUEST:
      return requestData();
    case PositionTodayActionTypes.FETCH_POSITION_TODAY_SUCCESS:
      return setData(action.payload);
    case PositionTodayActionTypes.FETCH_POSITION_TODAY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionTodayReducer;
