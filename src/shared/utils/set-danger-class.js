const setDangerClass = value => {
  const int = parseInt(value);
  if (int < 0) {
    return 'text-danger'
  } else if (int > 0)
    return 'text-accent'
};

export default setDangerClass;
