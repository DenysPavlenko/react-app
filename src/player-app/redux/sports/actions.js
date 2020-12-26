import SportsTypes from './types';
// Sports  service
import SportsService from 'player-app/services/sports-service';
const sportsService = new SportsService();

const sportsRequested = () => ({
  type: SportsTypes.FETCH_SPORTS_REQUEST
});
const sportsLoaded = data => ({
  type: SportsTypes.FETCH_SPORTS_SUCCESS,
  payload: data
});
const sportsError = error => ({
  type: SportsTypes.FETCH_SPORTS_FAILURE,
  payload: error
});

export const fetchSportsData = schedule => dispatch => {
  dispatch(sportsRequested());
  sportsService.getSports(schedule)
    .then(data => dispatch(sportsLoaded(data)))
    .catch(error => dispatch(sportsError(error)))
};
