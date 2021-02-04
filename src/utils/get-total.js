const getTotal = (data, key) => data.reduce((acc, item) => acc + parseInt(item[key]), 0);

export default getTotal;
