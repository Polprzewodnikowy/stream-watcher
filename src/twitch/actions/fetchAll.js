import fetchUser from './fetchUser';
import fetchFollowed from './fetchFollowed';
import fetchStreams from './fetchStreams';

const fetchAll = () => async (dispatch) => {
  await dispatch(fetchUser());
  await dispatch(fetchFollowed());
  await dispatch(fetchStreams());
};

export default fetchAll;
