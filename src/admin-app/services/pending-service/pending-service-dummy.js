// Dummy data
import * as pendingGames from './dummy-data/pending-games.json';
import * as pendingContests from './dummy-data/pending-contests.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class ScoresService {

  getPendingGames = async () => {
    return getDummyData({ data: pendingGames });
  }

  getPendingContests = async () => {
    return getDummyData({ data: pendingContests });
  }

  getPendingHorses = async () => {
    return getDummyData({ data: [] });
  }

  getPendingOpen = async () => {
    return getDummyData({ data: [] });
  }

  getPendingFree = async () => {
    return getDummyData({ data: [] });
  }

  getPendingLive = async () => {
    return getDummyData({ data: [] });
  }

}
