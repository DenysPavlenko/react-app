import MailTypes from './types';

export const toggleMail = () => ({
  type: MailTypes.TOGGLE_MAIL
});

export const messagesRequested = payload => ({
  type: MailTypes.FETCH_MESSAGES_REQUEST,
  payload
});
export const messagesLoaded = messages => ({
  type: MailTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages
});
export const messagesError = error => ({
  type: MailTypes.FETCH_MESSAGES_FAILURE,
  payload: error
});

export const deleteMessage = id => ({
  type: MailTypes.DELETE_MESSAGE,
  payload: id
});

export const deleteMessages = ids => ({
  type: MailTypes.DELETE_MESSAGES,
  payload: ids
});
