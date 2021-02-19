import WeeklyFiguresTypes from './types';

export const weeklyFiguresRequested = payload => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_REQUEST,
  payload
});
export const weeklyFiguresLoaded = data => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_SUCCESS,
  payload: data
});
export const weeklyFiguresError = error => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_FAILURE,
  payload: error
});
