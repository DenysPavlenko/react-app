import { requestData, setData, setError } from '../_utils/fetch-utils';
import MailActionTypes from './types';

const INITIAL_STATE = {
  isActive: true,
  inbox: {
    loading: true,
    data: null,
    error: false,
    errorDetails: null,
  },
  sent: {
    loading: true,
    data: null,
    error: false,
    errorDetails: null,
  }
};

const mailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MailActionTypes.TOGGLE_MAIL:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    case MailActionTypes.FETCH_INBOX_REQUEST:
      return {
        ...state,
        inbox: requestData()
      }
    case MailActionTypes.FETCH_INBOX_SUCCESS:
      return {
        ...state,
        inbox: setData(action.payload)
      }
    case MailActionTypes.FETCH_INBOX_FAILURE:
      return {
        ...state,
        inbox: setError(action.payload)
      }

    case MailActionTypes.FETCH_SENT_REQUEST:
      return {
        ...state,
        sent: requestData()
      }
    case MailActionTypes.FETCH_SENT_SUCCESS:
      return {
        ...state,
        sent: setData(action.payload)
      }
    case MailActionTypes.FETCH_SENT_FAILURE:
      return {
        ...state,
        sent: setError(action.payload)
      }
    default:
      return state;
  }
};

export default mailReducer;
