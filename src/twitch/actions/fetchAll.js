import { fetchUser } from './fetchUsers';
import { fetchFollowed } from './fetchFollowed';
import { fetchStreams } from './fetchStreams';

export const fetchAll = () => async (dispatch) => {
  await dispatch(fetchUser());
  await dispatch(fetchFollowed());
  await dispatch(fetchStreams());
};
