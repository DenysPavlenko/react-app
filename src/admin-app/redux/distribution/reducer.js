import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import DistributionActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const distributionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DistributionActionTypes.FETCH_DISTRIBUTION_REQUEST:
      return requestData();
    case DistributionActionTypes.FETCH_DISTRIBUTION_SUCCESS:
      return setData(action.payload);
    case DistributionActionTypes.FETCH_DISTRIBUTION_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default distributionReducer;
