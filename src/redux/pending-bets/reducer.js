import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import PendingBetsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const pendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingBetsTypes.FETCH_PENDING_BETS_REQUEST:
      return requestData();
    case PendingBetsTypes.FETCH_PENDING_BETS_SUCCESS:
      return setData(action.payload);
    case PendingBetsTypes.FETCH_PENDING_BETS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default pendingReducer;
