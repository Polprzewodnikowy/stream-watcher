import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { TWITCH_FETCH_USER, TWITCH_CLEAR_USER } from '../actionTypes';
import { TWITCH_USERS_URL } from '../constants';
import { transformUsers } from '../transform';

export const fetchUsers = options => dispatch => (
  dispatch(buildTwitchRequestActionCreator({
    url: TWITCH_USERS_URL,
    transform: transformUsers,
    ...options,
  }))
);

export const clearUser = buildActionCreator(TWITCH_CLEAR_USER);

export const fetchUser = () => (dispatch, getState) => {
  const { twitch: { token } } = getState();

  if (!token) {
    return null;
  }

  return dispatch(fetchUsers({
    baseAction: TWITCH_FETCH_USER,
  }));
};
