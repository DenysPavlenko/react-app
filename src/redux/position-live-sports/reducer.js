import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import PositionLiveSportsService from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionLiveSportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_REQUEST:
      return requestData();
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_SUCCESS:
      return setData(action.payload);
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionLiveSportsReducer;
