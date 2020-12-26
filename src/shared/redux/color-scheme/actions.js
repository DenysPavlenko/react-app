import ColorSchemeTypes from './types';

export const setColorScheme = color => ({
  type: ColorSchemeTypes.SET_COLOR_SCHEME,
  payload: color
});
