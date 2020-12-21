// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class MailService {

  getUser = async () => {
    return getDummyData({ data, errorProbability: 1, timeOut: 0 });
  }

}
