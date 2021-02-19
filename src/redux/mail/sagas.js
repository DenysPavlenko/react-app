import { takeLatest, put } from 'redux-saga/effects';
import { messagesRequested, messagesLoaded, messagesError } from './actions';
import MailService from 'services/mail-service';
const mailService = new MailService();

function* fetchMessagesWorker({ payload }) {
  try {
    let service;
    if (payload === 'inbox') { service = mailService.getInboxMessages; }
    else if (payload === 'sent') { service = mailService.getSentMessages; }
    else { return; }
    const data = yield service();
    yield put(messagesLoaded(data));
  } catch ({ message }) {
    yield put(messagesError(message));
  }
}

export function* fetchMessages() {
  yield takeLatest(messagesRequested().type, fetchMessagesWorker);
}
