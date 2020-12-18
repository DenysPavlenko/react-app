// Dummy data
import * as all from './dummy-data/all.json';
import * as active from './dummy-data/active.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class ScoresService {

  getFigures = async (date, status) => {
    switch (status) {
      case 'all':
        return getDummyData({ data: all });
      case 'active':
        return getDummyData({ data: active });
      default:
        return getDummyData({ data: [] });
    }
  }

}
