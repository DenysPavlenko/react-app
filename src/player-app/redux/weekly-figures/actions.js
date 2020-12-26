import WeeklyFiguresTypes from './types';
// Weekly figures service
import WeeklyFiguresService from 'player-app/services/weekly-figures-service';
const weeklyFiguresService = new WeeklyFiguresService();

const weeklyFiguresRequested = () => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_REQUEST
});
const weeklyFiguresLoaded = data => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_SUCCESS,
  payload: data
});
const weeklyFiguresError = error => ({
  type: WeeklyFiguresTypes.FETCH_WEEKLY_FIGURES_FAILURE,
  payload: error
});

export const fetchWeeklyFiguresData = figure => dispatch => {
  dispatch(weeklyFiguresRequested());
  weeklyFiguresService.getWeeklyFigures(figure)
    .then(data => dispatch(weeklyFiguresLoaded(data)))
    .catch(error => dispatch(weeklyFiguresError(error)))
};
