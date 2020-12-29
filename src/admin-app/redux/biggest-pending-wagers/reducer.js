import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import BiggestPendingWagersTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const biggestPendingWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_REQUEST:
      return requestData();
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_SUCCESS:
      return setData(action.payload)
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_FAILURE:
      return setError(action.payload)
    default:
      return state;
  }
};

export default biggestPendingWagersReducer;
