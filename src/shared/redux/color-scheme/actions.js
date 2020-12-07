import ColorSchemeActionTypes from './types';

export const setColorScheme = color => ({
  type: ColorSchemeActionTypes.SET_COLOR_SCHEME,
  payload: color
});
