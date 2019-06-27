import { buildActionCreator } from 'shared';
import { getUserByToken } from 'twitch/api';
import { TWITCH_SAVE_USER } from 'twitch/actionTypes';
import { transformUsers } from 'twitch/transform';

export const saveUser = buildActionCreator(TWITCH_SAVE_USER, 'user');

const fetchUser = () => async (dispatch, getState) => {
  const { twitch: { token } } = getState();

  if (token) {
    return getUserByToken(token)
      .then(transformUsers)
      .then(([user]) => dispatch(saveUser(user)));
  }

  return null;
};

export default fetchUser;
