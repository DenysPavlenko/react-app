import SportsScheduleEventsTypes from './types';

const INITIAL_STATE = {
  events: ['Up next']
};

const sportsScheduleEventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsScheduleEventsTypes.SET_SPORTS_SCHEDULE_EVENTS:
      const { events } = state;
      const hasItem = events.includes(action.payload);
      let newEvents;
      if (!hasItem) {
        newEvents = [...events, action.payload]
      } else {
        newEvents = events.filter((elem) => elem !== action.payload)
      }
      return {
        events: newEvents
      }
    case SportsScheduleEventsTypes.SET_SPORTS_SCHEDULE_EVENT:
      return {
        events: [action.payload]
      }
    default:
      return state;
  }
};

export default sportsScheduleEventsReducer;
