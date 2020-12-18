// Dummy data
import * as footbalHistory from './dummy-data/football-history.json';
import * as monthlyHistory from './dummy-data/monthly-history.json';
import * as yearlyHistory from './dummy-data/yearly-history.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class ScoresService {

  getClientHistory = async (clientId, category) => {
    switch (category) {
      case 'football':
        return getDummyData({ data: footbalHistory });
      case 'monthly':
        return getDummyData({ data: monthlyHistory });
      case 'yearly':
        return getDummyData({ data: yearlyHistory });
      default:
        return getDummyData({ data: [] });
    }
  }

}
