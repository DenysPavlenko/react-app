import ColorSchemeActionTypes from './types';

const INITIAL_STATE = {
  default: 'blue',
  colorSchemes: ['blue', 'green', 'red', 'orange'],
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ColorSchemeActionTypes.SET_COLOR_SCHEME:
      return {
        ...state,
        default: action.payload
      }
    default:
      return state;
  }
}

export default gamesReducer;
