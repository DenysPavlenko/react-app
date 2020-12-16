import DistributionActionTypes from './types';
import DistributionService from 'admin-app/services/distribution-service';

const distributionService = new DistributionService();

const distributionRequested = () => ({
  type: DistributionActionTypes.FETCH_DISTRIBUTION_REQUEST
});
const distributionLoaded = data => ({
  type: DistributionActionTypes.FETCH_DISTRIBUTION_SUCCESS,
  payload: data
});
const distributionError = error => ({
  type: DistributionActionTypes.FETCH_DISTRIBUTION_FAILURE,
  payload: error
});

export const fetchDistributionData = date => dispatch => {
  dispatch(distributionRequested());
  distributionService.getDistribution(date)
    .then(data => dispatch(distributionLoaded(data)))
    .catch(error => dispatch(distributionError(error)))
};
