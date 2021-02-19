import PositionTodayTypes from './types';

export const positionTodayRequested = () => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_REQUEST
});
export const positionTodayLoaded = data => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_SUCCESS,
  payload: data
});
export const positionTodayError = error => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_FAILURE,
  payload: error
});
