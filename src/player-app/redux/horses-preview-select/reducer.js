import HorsesPreviewTypes from './types';

const INITIAL_STATE = {
  isHorsesSelectShown: false
};

const horsesPageSelectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HorsesPreviewTypes.TOGGLE_HORSES_PREVIEW_SELECT:
      const { isHorsesSelectShown } = state;
      return {
        isHorsesSelectShown: !isHorsesSelectShown
      }
    default:
      return state;
  }
};

export default horsesPageSelectReducer;
