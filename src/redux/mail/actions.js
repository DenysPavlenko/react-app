import MailActionTypes from './types';
// Live program service
import MailService from 'services/mail-service';
const mailService = new MailService();

export const toggleMail = () => ({
  type: MailActionTypes.TOGGLE_MAIL
});

const inboxRequested = () => ({
  type: MailActionTypes.FETCH_INBOX_REQUEST
});
const inboxLoaded = messages => ({
  type: MailActionTypes.FETCH_INBOX_SUCCESS,
  payload: messages
});
const inboxError = error => ({
  type: MailActionTypes.FETCH_INBOX_FAILURE,
  payload: error
});

const sentRequested = () => ({
  type: MailActionTypes.FETCH_SENT_REQUEST
});
const sentLoaded = messages => ({
  type: MailActionTypes.FETCH_SENT_SUCCESS,
  payload: messages
});
const sentError = error => ({
  type: MailActionTypes.FETCH_SENT_FAILURE,
  payload: error
});

export const fetchInbox = () => (dispatch) => {
  dispatch(inboxRequested());
  mailService.getInboxMessages()
    .then(data => dispatch(inboxLoaded(data)))
    .catch(error => dispatch(inboxError(error)))
};

export const fetchSent = () => (dispatch) => {
  dispatch(sentRequested());
  mailService.getSentMessages()
    .then(data => dispatch(sentLoaded(data)))
    .catch(error => dispatch(sentError(error)))
};
