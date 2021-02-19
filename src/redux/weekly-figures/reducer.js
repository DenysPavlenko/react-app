import { fetchState } from 'redux/_utils/fetch-state';
import WeeklyFiguresTypes from './types';

const INITIAL_STATE = fetchState('initial');

const weeklyFiguresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_REQUEST:
      return fetchState('request');
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_SUCCESS:
      return fetchState('success');
    case WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_FAILURE:
      return fetchState('failure');
    default:
      return state;
  }
};

export default weeklyFiguresReducer;
