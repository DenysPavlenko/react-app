// Dummy data
import * as footbalHistory from './dummy-data/football-history.json';
import * as monthlyHistory from './dummy-data/monthly-history.json';
import * as yearlyHistory from './dummy-data/yearly-history.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class ScoresService {

  getClientFootballHistory = async () => {
    return getDummyData({ data: footbalHistory });
  }

  getClientMonthlyHistory = async () => {
    return getDummyData({ data: monthlyHistory });
  }

  getClientYarlyHistory = async () => {
    return getDummyData({ data: yearlyHistory });
  }

}
