// Dummy data
import * as football from './dummy-data/football.json';
import * as baseball from './dummy-data/baseball.json';
import * as hockey from './dummy-data/hockey.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class ScoresService {

  getPositionGame = async (game, filter) => {
    switch (game) {
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
