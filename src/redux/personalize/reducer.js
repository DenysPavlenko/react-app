import PersonalizeTypes from './types';

const INITIAL_STATE = {
  isActive: false
};

const personalizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PersonalizeTypes.TOGGLE_PERSONALIZE:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    default:
      return state;
  }
};

export default personalizeReducer;
