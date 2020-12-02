import { requestData, setData, setError } from '../_utils/fetch-utils';
import WeeklyFiguresActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const weeklyFiguresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_REQUEST:
      return requestData();
    case WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_SUCCESS:
      return setData(action.payload);
    case WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default weeklyFiguresReducer;
