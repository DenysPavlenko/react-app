import LiveMarketsActionTypes from './types';
// Services
import LiveMarketsService from 'services/live-markets-service';
// Games service
const liveMarketsService = new LiveMarketsService();

const liveProgramRequested = () => ({
  type: LiveMarketsActionTypes.FETCH_LIVE_MARKETS_REQUEST
});
const liveProgramLoaded = data => ({
  type: LiveMarketsActionTypes.FETCH_LIVE_MARKETS_SUCCESS,
  payload: data
});
const liveProgramError = error => ({
  type: LiveMarketsActionTypes.FETCH_LIVE_MARKETS_FAILURE,
  payload: error
});

export const fetchLiveMarketsData = () => (dispatch) => {
  dispatch(liveProgramRequested());
  liveMarketsService.getLiveMarkets()
    .then((data) => dispatch(liveProgramLoaded(data)))
    .catch((error) => dispatch(liveProgramError(error)))
};
