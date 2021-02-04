const getTableTotal = (data, name) => data && data.reduce((acc, item) => item[name] ? acc + parseInt(item[name]) : 0, 0).toFixed(2);

export default getTableTotal;
