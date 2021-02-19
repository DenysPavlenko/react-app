import { fetchState } from 'redux/_utils/fetch-state';
import DistributionTypes from './types';

const INITIAL_STATE = fetchState('initial');

const distributionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DistributionTypes.FETCH_DISTRIBUTION_REQUEST:
      return fetchState('request');
    case DistributionTypes.FETCH_DISTRIBUTION_SUCCESS:
      return fetchState('success', action.payload);
    case DistributionTypes.FETCH_DISTRIBUTION_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default distributionReducer;
