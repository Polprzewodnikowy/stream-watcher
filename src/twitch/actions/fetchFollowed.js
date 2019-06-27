import { buildActionCreator } from 'shared';
import { getUsersFollows, getUsersById } from 'twitch/api';
import { TWITCH_SAVE_FOLLOWED } from 'twitch/actionTypes';
import { transformUsers, transformUsersFollows } from 'twitch/transform';

export const saveFollowed = buildActionCreator(TWITCH_SAVE_FOLLOWED, 'followed');

const fetchFollowed = () => async (dispatch, getState) => {
  const { twitch: { token, user: { userId } } } = getState();

  if (userId) {
    return getUsersFollows(userId, token)
      .then(transformUsersFollows)
      .then(follows => getUsersById(follows, token))
      .then(transformUsers)
      .then(followed => dispatch(saveFollowed(followed)));
  }

  return null;
};

export default fetchFollowed;
