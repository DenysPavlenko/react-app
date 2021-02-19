export const fetchState = (type, payload) => {
  const state = {
    loading: false,
    data: null,
    error: false
  };

  switch (type) {
    case 'initial':
      return state;
    case 'request':
      return {
        ...state,
        loading: true
      };
    case 'success':
      return {
        ...state,
        data: payload
      };
    case 'error':
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};