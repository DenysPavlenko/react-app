// Dummy data
import * as data from './dummy-data/data.json';
// Helpers
import getDummyData from 'shared/services/_utils/get-dummy-data';

export default class HorsesTracksService {

  getHorsesTracks = async () => {
    return getDummyData({ data })
  }

};
