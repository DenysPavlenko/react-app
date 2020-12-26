import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import WeeklyFiguresTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const weeklyFiguresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_REQUEST:
      return requestData();
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_SUCCESS:
      return setData(action.payload);
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default weeklyFiguresReducer;
