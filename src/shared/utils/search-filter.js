const searchFilter = (data, searchValue) => {
  return Object.values(data).some((item) => {
    return typeof item === 'string' && item.toLowerCase().indexOf(searchValue) !== -1
  });
}

export default searchFilter;
