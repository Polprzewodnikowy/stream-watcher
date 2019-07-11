import { chunk } from 'lodash';
import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { fetchUsers } from './fetchUsers';
import { TWITCH_USERS_FOLLOWS_URL } from '../constants';
import {
  TWITCH_FETCH_FOLLOWED_IDS,
  TWITCH_CLEAR_FOLLOWED_IDS,
  TWITCH_FETCH_FOLLOWED_USERS,
  TWITCH_CLEAR_FOLLOWED_USERS,
} from '../actionTypes';
import { transformUsersFollows } from '../transform';

export const clearFollowedIds = buildActionCreator(TWITCH_CLEAR_FOLLOWED_IDS);
export const clearFollowedUsers = buildActionCreator(TWITCH_CLEAR_FOLLOWED_USERS);
export const clearFollowed = () => (dispatch) => {
  dispatch(clearFollowedIds());
  dispatch(clearFollowedUsers());
};

export const fetchFollowedIds = () => (dispatch, getState) => {
  const { twitch: { user: { userId }, followedIds: { cursor } } } = getState();

  if (!userId) {
    return null;
  }

  return dispatch(buildTwitchRequestActionCreator({
    baseAction: TWITCH_FETCH_FOLLOWED_IDS,
    url: TWITCH_USERS_FOLLOWS_URL,
    query: { from_id: userId, first: 100, after: cursor },
    transform: transformUsersFollows,
  }));
};

export const fetchFollowedUsers = () => (dispatch, getState) => {
  const { twitch: { followedIds: { list }, followed } } = getState();

  const filteredList = list.filter(id => !followed.find(({ userId }) => userId === id));
  const chunks = chunk(filteredList, 100);

  return Promise.all(chunks.map(idChunk => dispatch(fetchUsers({
    baseAction: TWITCH_FETCH_FOLLOWED_USERS,
    query: { id: idChunk },
  }))));
};

export const fetchFollowed = () => async (dispatch) => {
  await dispatch(fetchFollowedIds());
  await dispatch(fetchFollowedUsers());
};
