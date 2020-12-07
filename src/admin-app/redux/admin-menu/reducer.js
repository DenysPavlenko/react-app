import AdminMenuActionTypes from './types';

const INITIAL_STATE = {
  isActive: false
};

const adminMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminMenuActionTypes.TOGGLE_ADMIN_MENU:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    default:
      return state;
  }
};

export default adminMenuReducer;
