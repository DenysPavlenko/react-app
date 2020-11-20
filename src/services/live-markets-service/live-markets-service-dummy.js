// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'services/helpers/get-dummy-data';

export default class LiveMarketsServiceDummy {

  getLiveMarkets = async () => {
    return getDummyData({ data, timeOut: 1000 })
  }

};
