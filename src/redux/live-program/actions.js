import LiveProgramActionTypes from './types';
// Live program service
import LiveProgramService from 'services/live-program-service';
const liveProgramService = new LiveProgramService();

const liveProgramRequested = () => ({
  type: LiveProgramActionTypes.FETCH_LIVE_PROGRAM_REQUEST
});
const liveProgramLoaded = data => ({
  type: LiveProgramActionTypes.FETCH_LIVE_PROGRAM_SUCCESS,
  payload: data
});
const liveProgramError = error => ({
  type: LiveProgramActionTypes.FETCH_LIVE_PROGRAM_FAILURE,
  payload: error
});

export const fetchLiveProgramData = () => dispatch => {
  dispatch(liveProgramRequested());
  liveProgramService.getLiveProgram()
    .then(data => dispatch(liveProgramLoaded(data)))
    .catch(error => dispatch(liveProgramError(error)))
};
