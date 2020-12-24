import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import HorsesBettibgsService from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const horsesBettingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HorsesBettibgsService.FETCH_HORSES_BETTINGS_REQUEST:
      return requestData();
    case HorsesBettibgsService.FETCH_HORSES_BETTINGS_SUCCESS:
      return setData(action.payload);
    case HorsesBettibgsService.FETCH_HORSES_BETTINGS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default horsesBettingsReducer;
