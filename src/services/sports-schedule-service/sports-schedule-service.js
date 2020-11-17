// Dummy data
import * as data from './dummy-data/data.json';

export default class GamesServiceDummy {

  serverRespond = 500;

  getData = async (url, errorMsg = 'error', errorProbability = 0.99) => {
    const res = await url.default;
    await new Promise((res, rej) => setTimeout(() => {
      return Math.random() > errorProbability ? rej(new Error(errorMsg)) : res();
    }, this.serverRespond));
    return res;
  }

  getSportsSchedule = async () => {
    return this.getData(data)
  }

}
