import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import PositionTodayTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionTodayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionTodayTypes.FETCH_POSITION_TODAY_REQUEST:
      return requestData();
    case PositionTodayTypes.FETCH_POSITION_TODAY_SUCCESS:
      return setData(action.payload);
    case PositionTodayTypes.FETCH_POSITION_TODAY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionTodayReducer;
