import SideMenuTypes from './types';

const INITIAL_STATE = {
  isActive: false
};

const SideMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SideMenuTypes.TOGGLE_SIDE_MENU:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    default:
      return state;
  }
};

export default SideMenuReducer;
