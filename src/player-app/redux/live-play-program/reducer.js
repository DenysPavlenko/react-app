import LivePlayProgramActionTypes from './types';

const INITIAL_STATE = {
  isProgramShown: false
};

const livePlayProgramReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LivePlayProgramActionTypes.TOGGLE_LIVE_PLAY_PROGRAM:
      const { isProgramShown } = state;
      return {
        isProgramShown: !isProgramShown
      }
    default:
      return state;
  }
};

export default livePlayProgramReducer;
