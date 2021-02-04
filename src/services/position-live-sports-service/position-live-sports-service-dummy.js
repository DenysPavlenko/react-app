// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class ScoresService {

  getPositionToday = async () => {
    return getDummyData({ data });
  }

}
