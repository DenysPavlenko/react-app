import FiguresTypes from './types';
import FiguresService from 'admin-app/services/figures-service';

const figuresService = new FiguresService();

const figuresRequested = () => ({
  type: FiguresTypes.FETCH_FIGURES_REQUEST
});
const figuresLoaded = data => ({
  type: FiguresTypes.FETCH_FIGURES_SUCCESS,
  payload: data
});
const figuresError = error => ({
  type: FiguresTypes.FETCH_FIGURES_FAILURE,
  payload: error
});

export const fetchFiguresData = (date, status) => dispatch => {
  dispatch(figuresRequested());
  figuresService.getFigures(date, status)
    .then(data => dispatch(figuresLoaded(data)))
    .catch(error => dispatch(figuresError(error)))
};
