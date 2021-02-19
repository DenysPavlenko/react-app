import SportsTypes from './types';

export const sportsRequested = payload => ({
  type: SportsTypes.FETCH_SPORTS_REQUEST,
  payload
});
export const sportsLoaded = data => ({
  type: SportsTypes.FETCH_SPORTS_SUCCESS,
  payload: data
});
export const sportsError = error => ({
  type: SportsTypes.FETCH_SPORTS_FAILURE,
  payload: error
});
