const getDummyData = async ({data, errorMsg = 'error', errorProbability = 0.99, timeOut = 500}) => {
  const res = await data.default;
  await new Promise((res, rej) => setTimeout(() => {
    return Math.random() > errorProbability ? rej(new Error(errorMsg)) : res();
  }, timeOut));
  return res;
};

export default getDummyData;
