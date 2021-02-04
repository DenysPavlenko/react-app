// Dummy data
import * as pendingGames from './dummy-data/pending-games.json';
import * as pendingContests from './dummy-data/pending-contests.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class ScoresService {

  getPending = async category => {
    switch (category) {
      case 'games':
        return getDummyData({ data: pendingGames });
      case 'contest':
        return getDummyData({ data: pendingContests });
      default:
        return getDummyData({ data: [] });
    }
  }
};
