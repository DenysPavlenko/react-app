import { takeLatest, put } from 'redux-saga/effects';
import { customerListRequested, customerListLoaded, customerListError } from './actions';
import CustomerListService from 'services/customer-list-service';
const customerListService = new CustomerListService();

function* fetchCustomerListDataWorker() {
  try {
    const data = yield customerListService.getCustomerList();
    yield put(customerListLoaded(data));
  } catch ({ message }) {
    yield put(customerListError(message));
  }
}

export function* fetchCustomerListData() {
  yield takeLatest(customerListRequested().type, fetchCustomerListDataWorker);
}
