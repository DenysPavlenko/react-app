import FiguresTypes from './types';

export const figuresRequested = payload => ({
  type: FiguresTypes.FETCH_FIGURES_REQUEST,
  payload
});
export const figuresLoaded = data => ({
  type: FiguresTypes.FETCH_FIGURES_SUCCESS,
  payload: data
});
export const figuresError = error => ({
  type: FiguresTypes.FETCH_FIGURES_FAILURE,
  payload: error
});
