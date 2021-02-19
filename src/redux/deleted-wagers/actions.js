import DeletedWagersTypes from './types';
import DeletedWagersService from 'services/deleted-wagers-service';

const deletedWagersService = new DeletedWagersService();

const deletedWagersRequested = () => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_REQUEST
});
const deletedWagersLoaded = data => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_SUCCESS,
  payload: data
});
const deletedWagersError = error => ({
  type: DeletedWagersTypes.FETCH_DELETED_WAGERS_FAILURE,
  payload: error
});

export const fetchDeletedWagersData = () => dispatch => {
  dispatch(deletedWagersRequested());
  deletedWagersService.getDeletedWagers()
    .then(data => dispatch(deletedWagersLoaded(data)))
    .catch(error => dispatch(deletedWagersError(error)))
};