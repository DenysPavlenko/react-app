import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import FiguresActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const figuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FiguresActionTypes.FETCH_FIGURES_REQUEST:
      return requestData();
    case FiguresActionTypes.FETCH_FIGURES_SUCCESS:
      return setData(action.payload);
    case FiguresActionTypes.FETCH_FIGURES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default figuresReducer;
