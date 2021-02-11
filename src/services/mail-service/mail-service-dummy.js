// Dummy data
import * as inbox from './dummy-data/inbox.json';
import * as sent from './dummy-data/sent.json';
// Helpers
import getDummyData from 'services/_utils/get-dummy-data';

export default class DummyService {

  getInboxMessages = () => {
    return getDummyData({ data: inbox });
  }

  getSentMessages = () => {
    return getDummyData({ data: sent });
  }

}
