import DistributionTypes from './types';

export const distributionRequested = payload => ({
  type: DistributionTypes.FETCH_DISTRIBUTION_REQUEST,
  payload
});
export const distributionLoaded = data => ({
  type: DistributionTypes.FETCH_DISTRIBUTION_SUCCESS,
  payload: data
});
export const distributionError = error => ({
  type: DistributionTypes.FETCH_DISTRIBUTION_FAILURE,
  payload: error
});
