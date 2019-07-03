import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { fetchUsers } from './fetchUsers';
import { TWITCH_USERS_FOLLOWS_URL } from '../constants';
import { TWITCH_FETCH_FOLLOWED, TWITCH_CLEAR_FOLLOWED } from '../actionTypes';
import { transformUsersFollows } from '../transform';

export const clearFollowed = buildActionCreator(TWITCH_CLEAR_FOLLOWED);

export const fetchFollowed = () => (dispatch, getState) => {
  const { twitch: { user: { userId } } } = getState();

  if (!userId) {
    return null;
  }

  return dispatch(buildTwitchRequestActionCreator({
    url: TWITCH_USERS_FOLLOWS_URL,
    query: { from_id: userId, first: 100 },
    transform: transformUsersFollows,
  }))
    .then(follows => dispatch(fetchUsers({
      baseAction: TWITCH_FETCH_FOLLOWED,
      query: { id: follows, first: 100 },
    })));
};
