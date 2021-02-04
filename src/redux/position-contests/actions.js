import PositionContestsTypes from './types';
import PositionContestsService from 'services/position-contests-service';

const positionContestsService = new PositionContestsService();

const positionContestsRequested = () => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_REQUEST
});
const positionContestsLoaded = data => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_SUCCESS,
  payload: data
});
const positionContestsError = error => ({
  type: PositionContestsTypes.FETCH_POSITION_CONTESTS_FAILURE,
  payload: error
});

export const fetchPositionContestsData = contest => dispatch => {
  dispatch(positionContestsRequested());
  positionContestsService.getPositionContests(contest)
    .then(data => dispatch(positionContestsLoaded(data)))
    .catch(error => dispatch(positionContestsError(error)))
};
