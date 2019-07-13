import { uniq } from 'lodash';
import { combineReducers } from 'redux';
import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_FOLLOWED_IDS,
  TWITCH_FETCH_FOLLOWED_IDS_SUCCESS,
  TWITCH_FETCH_FOLLOWED_IDS_ERROR,
  TWITCH_CLEAR_FOLLOWED_IDS,
} from '../actionTypes';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_FOLLOWED_IDS_SUCCESS:
      return uniq([...state, ...payload.data]);
    case TWITCH_CLEAR_FOLLOWED_IDS:
      return [];
    default:
      return state;
  }
};

const total = (state = null, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_FOLLOWED_IDS_SUCCESS:
      return payload.total || state;
    case TWITCH_CLEAR_FOLLOWED_IDS:
      return null;
    default:
      return state;
  }
};

const cursor = (state = null, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_FOLLOWED_IDS_SUCCESS:
      return (payload.pagination && payload.pagination.cursor) || null;
    case TWITCH_CLEAR_FOLLOWED_IDS:
      return null;
    default:
      return state;
  }
};

const [
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
] = buildActionReducers({
  start: TWITCH_FETCH_FOLLOWED_IDS,
  success: TWITCH_FETCH_FOLLOWED_IDS_SUCCESS,
  error: TWITCH_FETCH_FOLLOWED_IDS_ERROR,
  clear: TWITCH_CLEAR_FOLLOWED_IDS,
});

const followedIds = combineReducers({
  list,
  total,
  cursor,
});

export {
  followedIds,
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
};
