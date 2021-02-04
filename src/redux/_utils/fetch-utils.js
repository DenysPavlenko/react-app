export const requestData = () => ({
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
});

export const setData = data => {
  return ({
    loading: false,
    data: data,
    error: false,
    errorDetails: null,
  })
};

export const setError = error => ({
  loading: false,
  data: null,
  error: true,
  errorDetails: error,
});
