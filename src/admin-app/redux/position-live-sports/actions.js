import PositionLiveSportsActionTypes from './types';
import PositionLiveSportsService from 'admin-app/services/position-live-sports-service';

const positionLiveSportsService = new PositionLiveSportsService();

const positionLiveSportsRequested = () => ({
  type: PositionLiveSportsActionTypes.FETCH_POSITION_LIVE_SPORTS_REQUEST
});
const positionLiveSportsLoaded = data => ({
  type: PositionLiveSportsActionTypes.FETCH_POSITION_LIVE_SPORTS_SUCCESS,
  payload: data
});
const positionLiveSportsError = error => ({
  type: PositionLiveSportsActionTypes.FETCH_POSITION_LIVE_SPORTS_FAILURE,
  payload: error
});

export const fetchPositionLiveSportsData = () => dispatch => {
  dispatch(positionLiveSportsRequested());
  positionLiveSportsService.getPositionToday()
    .then(data => dispatch(positionLiveSportsLoaded(data)))
    .catch(error => dispatch(positionLiveSportsError(error)))
};