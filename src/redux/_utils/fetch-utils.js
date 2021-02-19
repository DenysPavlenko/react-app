export const requestData = () => ({
  loading: true,
  data: null,
  error: null
});

export const setData = data => {
  return ({
    loading: false,
    data: data,
    error: null
  })
};

export const setError = error => ({
  loading: false,
  data: null,
  error: error
});
