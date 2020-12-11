// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class DummyService {

  getWeeklyFigures = async () => {
    return getDummyData({ data })
  }

};
