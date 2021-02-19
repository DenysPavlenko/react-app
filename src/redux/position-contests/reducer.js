import { fetchState } from 'redux/_utils/fetch-state';
import PositionContestsService from './types';

const INITIAL_STATE = fetchState('initial');

const positionContestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionContestsService.FETCH_POSITION_CONTESTS_REQUEST:
      return fetchState('request');
    case PositionContestsService.FETCH_POSITION_CONTESTS_SUCCESS:
      return fetchState('success', action.payload);
    case PositionContestsService.FETCH_POSITION_CONTESTS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default positionContestsReducer;
