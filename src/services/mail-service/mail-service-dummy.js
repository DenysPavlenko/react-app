// Dummy data
import * as inbox from './dummy-data/inbox.json';
import * as sent from './dummy-data/sent.json';
// Helpers
import getDummyData from 'services/_helpers/get-dummy-data';

export default class MailService {

  getInboxMessages = async () => {
    return getDummyData({ data: inbox });
  }

  getSentMessages = async () => {
    return getDummyData({ data: sent });
  }

}
