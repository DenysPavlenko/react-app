import { takeLatest, put } from 'redux-saga/effects';
import { agentsRequested, agentsLoaded, agentsError } from './actions';
import AgentsService from 'services/agents-service';
const agentsService = new AgentsService();

function* fetchAgentsDataWorker() {
  try {
    const data = yield agentsService.getAgents();
    yield put(agentsLoaded(data));
  } catch (error) {
    yield put(agentsError(error));
  }
}

export function* fetchAgentsData() {
  yield takeLatest(agentsRequested().type, fetchAgentsDataWorker);
};
