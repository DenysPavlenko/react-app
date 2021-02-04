import PositionLiveSportsTypes from './types';
import PositionLiveSportsService from 'services/position-live-sports-service';

const positionLiveSportsService = new PositionLiveSportsService();

const positionLiveSportsRequested = () => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_REQUEST
});
const positionLiveSportsLoaded = data => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_SUCCESS,
  payload: data
});
const positionLiveSportsError = error => ({
  type: PositionLiveSportsTypes.FETCH_POSITION_LIVE_SPORTS_FAILURE,
  payload: error
});

export const fetchPositionLiveSportsData = () => dispatch => {
  dispatch(positionLiveSportsRequested());
  positionLiveSportsService.getPositionToday()
    .then(data => dispatch(positionLiveSportsLoaded(data)))
    .catch(error => dispatch(positionLiveSportsError(error)))
};
