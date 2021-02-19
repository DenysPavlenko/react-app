import PositionLiveSportsTypes from './types';

export const positionLiveSportsRequested = () => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_REQUEST
});
export const positionLiveSportsLoaded = data => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_SUCCESS,
  payload: data
});
export const positionLiveSportsError = error => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_FAILURE,
  payload: error
});
