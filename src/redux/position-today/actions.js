import PositionTodayTypes from './types';
import PositionTodayService from 'services/position-today-service';
const positionTodayService = new PositionTodayService();

const positionTodayRequested = () => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_REQUEST
});
const positionTodayLoaded = data => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_SUCCESS,
  payload: data
});
const positionTodayError = error => ({
  type: PositionTodayTypes.FETCH_POSITION_TODAY_FAILURE,
  payload: error
});

export const fetchPositionTodayData = () => dispatch => {
  dispatch(positionTodayRequested());
  positionTodayService.getPositionToday()
    .then(data => dispatch(positionTodayLoaded(data)))
    .catch(error => dispatch(positionTodayError(error)))
};
