import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import PendingBetsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const pendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingBetsActionTypes.FETCH_PENDING_BETS_REQUEST:
      return requestData();
    case PendingBetsActionTypes.FETCH_PENDING_BETS_SUCCESS:
      return setData(action.payload);
    case PendingBetsActionTypes.FETCH_PENDING_BETS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default pendingReducer;
