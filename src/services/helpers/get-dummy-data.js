const serverRespond = 500;

const getDummyData = async (url, errorMsg = 'error', errorProbability = 0.99) => {
  const res = await url.default;
  await new Promise((res, rej) => setTimeout(() => {
    return Math.random() > errorProbability ? rej(new Error(errorMsg)) : res();
  }, serverRespond));
  return res;
};

export default getDummyData;
