import PersonalizeActionTypes from './types';

const INITIAL_STATE = {
  isActive: false
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PersonalizeActionTypes.TOGGLE_PERSONALIZE:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    default:
      return state;
  }
}

export default gamesReducer;
