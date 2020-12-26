import ColorSchemeTypes from './types';

const INITIAL_STATE = {
  default: 'blue',
  colorSchemes: ['blue', 'green', 'red', 'orange'],
};

const colorSchemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ColorSchemeTypes.SET_COLOR_SCHEME:
      return {
        ...state,
        default: action.payload
      }
    default:
      return state;
  }
};

export default colorSchemeReducer;
