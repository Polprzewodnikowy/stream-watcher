import { uniq } from 'lodash';
import { combineReducers } from 'redux';
import { TWITCH_FETCH_FOLLOWED_IDS_SUCCESS, TWITCH_CLEAR_FOLLOWED_IDS } from '../actionTypes';

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

export default combineReducers({
  list,
  total,
  cursor,
});
