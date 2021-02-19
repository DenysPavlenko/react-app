import { fetchState } from 'redux/_utils/fetch-state';
import FiguresTypes from './types';

const INITIAL_STATE = fetchState('initial');

const figuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FiguresTypes.FETCH_FIGURES_REQUEST:
      return fetchState('request');
    case FiguresTypes.FETCH_FIGURES_SUCCESS:
      return fetchState('success', action.payload);
    case FiguresTypes.FETCH_FIGURES_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default figuresReducer;
