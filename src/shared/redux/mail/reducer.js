import { requestData, setData, setError } from '../_utils/fetch-utils';
import MailTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  messages: {
    loading: true,
    data: null,
    error: false,
    errorDetails: null,
  }
};

const mailReducer = (state = INITIAL_STATE, action) => {
  const { messages, messages: { data } } = state;

  switch (action.type) {
    case MailTypes.TOGGLE_MAIL:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    case MailTypes.FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        messages: requestData()
      }
    case MailTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: setData(action.payload)
      }
    case MailTypes.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        messages: setError(action.payload)
      }

    case MailTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: { ...messages, data: data.filter(({ id }) => id !== action.payload) }
      }

    case MailTypes.DELETE_MESSAGES:
      const newData = data.filter(({ id }) => !action.payload.includes(id));
      return {
        ...state,
        messages: { ...messages, data: newData }
      }

    default:
      return state;
  }
};

export default mailReducer;
