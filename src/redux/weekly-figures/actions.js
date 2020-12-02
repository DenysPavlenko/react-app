import WeeklyFiguresActionTypes from './types';
// Horses tracks service
import WeeklyFiguresService from 'services/weekly-figures';
const weeklyFiguresService = new WeeklyFiguresService();

const weeklyFiguresRequested = () => ({
  type: WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_REQUEST
});
const weeklyFiguresLoaded = data => ({
  type: WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_SUCCESS,
  payload: data
});
const weeklyFiguresError = error => ({
  type: WeeklyFiguresActionTypes.FETCH_WEEKLY_FIGURES_FAILURE,
  payload: error
});

export const fetchWeeklyFiguresData = figure => (dispatch) => {
  dispatch(weeklyFiguresRequested());
  weeklyFiguresService.getWeeklyFigures(figure)
    .then(data => dispatch(weeklyFiguresLoaded(data)))
    .catch(error => dispatch(weeklyFiguresError(error)))
};
