// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'services/_helpers/get-dummy-data';

export default class SportsScheduleService {

  getSportsSchedule = async () => {
    return getDummyData({ data });
  }

}

