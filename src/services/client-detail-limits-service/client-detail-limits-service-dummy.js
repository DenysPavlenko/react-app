// Dummy data
import * as football from './dummy-data/football.json';
import * as baseball from './dummy-data/baseball.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class DummyService {

  getClientDetailLimits = (clientId, detailLimits) => {
    switch (detailLimits) {
      case 'football':
        return getDummyData({ data: football });
      case 'baseball':
        return getDummyData({ data: baseball });
      default:
        return getDummyData({ data: [] });
    }
  }

}
