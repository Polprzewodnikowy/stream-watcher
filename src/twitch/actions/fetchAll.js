import { fetchUser, clearUser } from './fetchUsers';
import { fetchFollowed, clearFollowed } from './fetchFollowed';
import { fetchStreams, clearStreams } from './fetchStreams';
import { clearGames } from './fetchGames';

export const clearAll = () => (dispatch) => {
  dispatch(clearUser());
  dispatch(clearFollowed());
  dispatch(clearStreams());
  dispatch(clearGames());
};

export const fetchAll = () => async (dispatch) => {
  await dispatch(fetchUser());
  await dispatch(fetchFollowed());
  await dispatch(fetchStreams());
};
