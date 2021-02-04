import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import PositionContestsService from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionContestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionContestsService.FETCH_POSITION_CONTESTS_REQUEST:
      return requestData();
    case PositionContestsService.FETCH_POSITION_CONTESTS_SUCCESS:
      return setData(action.payload);
    case PositionContestsService.FETCH_POSITION_CONTESTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionContestsReducer;
