// Dummy data
import * as footbal from './dummy-data/football.json';
import * as baseball from './dummy-data/baseball.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class ScoresService {

  getClientFootballDetailLimits = async () => {
    return getDummyData({ data: footbal });
  }

  getClientDetailLimits = async (clientId, category) => {
    switch (category) {
      case 'football':
        return getDummyData({ data: footbal });
      case 'baseball':
        return getDummyData({ data: baseball });
      default:
        return getDummyData({ data: [] });
    }
  }

}
