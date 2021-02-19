import PositionContestsTypes from './types';

export const positionContestsRequested = payload => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_REQUEST,
  payload
});
export const positionContestsLoaded = data => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_SUCCESS,
  payload: data
});
export const positionContestsError = error => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_FAILURE,
  payload: error
});
