import HorsesTracksActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const HorsesTracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HorsesTracksActionTypes.FETCH_HORSES_TRACKS_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case HorsesTracksActionTypes.FETCH_HORSES_TRACKS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case HorsesTracksActionTypes.FETCH_HORSES_TRACKS_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
};

export default HorsesTracksReducer;
