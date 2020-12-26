import MailTypes from './types';
// Live program service
import MailService from 'shared/services/mail-service';
const mailService = new MailService();

export const toggleMail = () => ({
  type: MailTypes.TOGGLE_MAIL
});

const messagesRequested = () => ({
  type: MailTypes.FETCH_MESSAGES_REQUEST
});
const messagesLoaded = messages => ({
  type: MailTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages
});
const messagesError = error => ({
  type: MailTypes.FETCH_MESSAGES_FAILURE,
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
  type: MailTypes.DELETE_MESSAGE,
  payload: id
});

export const deleteMessages = ids => ({
  type: MailTypes.DELETE_MESSAGES,
  payload: ids
});
