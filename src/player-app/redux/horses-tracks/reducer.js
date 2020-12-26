import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import HorsesTracksTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const horsesTracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HorsesTracksTypes.FETCH_HORSES_TRACKS_REQUEST:
      return requestData();
    case HorsesTracksTypes.FETCH_HORSES_TRACKS_SUCCESS:
      return setData(action.payload);
    case HorsesTracksTypes.FETCH_HORSES_TRACKS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default horsesTracksReducer;
