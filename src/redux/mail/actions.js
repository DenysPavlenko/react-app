import MailActionTypes from './types';
// Live program service
import MailService from 'services/mail-service';
const mailService = new MailService();

export const toggleMail = () => ({
  type: MailActionTypes.TOGGLE_MAIL
});

const messagesRequested = () => ({
  type: MailActionTypes.FETCH_MESSAGES_REQUEST
});
const messagesLoaded = messages => ({
  type: MailActionTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages
});
const messagesError = error => ({
  type: MailActionTypes.FETCH_MESSAGES_FAILURE,
  payload: error
});
export const fetchMessages = (category) => dispatch => {
  let service;
  if (category === 'inbox') { service = mailService.getInboxMessages; }
  else if (category === 'sent') { service = mailService.getSentMessages; }
  else { return; }
  dispatch(messagesRequested());
  service()
    .then(data => dispatch(messagesLoaded(data)))
    .catch(error => dispatch(messagesError(error)))
};

export const deleteMessage = id => ({
  type: MailActionTypes.DELETE_MESSAGE,
  payload: id
});

export const deleteMessages = ids => ({
  type: MailActionTypes.DELETE_MESSAGES,
  payload: ids
});
