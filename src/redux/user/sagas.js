import { takeLatest, put } from 'redux-saga/effects';
import { userRequested, userLoaded, userError } from './actions';
import UserService from 'services/user-service';
const userService = new UserService();

function* fetchUserDataWorker({ payload }) {
  try {
    const data = yield userService.getUser(payload);
    yield put(userLoaded(data));
  } catch ({ message }) {
    yield put(userError(message));
  }
}

export function* fetchUserData() {
  yield takeLatest(userRequested().type, fetchUserDataWorker);
}
