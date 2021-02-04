// Dummy data
import * as football from './dummy-data/football.json';
import * as baseball from './dummy-data/baseball.json';
import * as hockey from './dummy-data/hockey.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class ScoresService {

  getPositionContests = async contest => {
    switch (contest) {
      case 'football':
        return getDummyData({ data: football });
      case 'baseball':
        return getDummyData({ data: baseball });
      case 'hockey':
        return getDummyData({ data: hockey });
      default:
        return getDummyData({ data: [] });
    }
  }

}
