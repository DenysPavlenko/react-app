import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData)
  ])
}

export default rootSaga;
