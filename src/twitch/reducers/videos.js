import { uniqBy } from 'lodash';
import { combineReducers } from 'redux';
import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_VIDEOS,
  TWITCH_FETCH_VIDEOS_SUCCESS,
  TWITCH_FETCH_VIDEOS_ERROR,
  TWITCH_CLEAR_VIDEOS,
} from '../actionTypes';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_VIDEOS_SUCCESS:
      return uniqBy([...state, ...payload.data], 'videoId');
    case TWITCH_CLEAR_VIDEOS:
      return [];
    default:
      return state;
  }
};

const cursor = (state = null, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_VIDEOS_SUCCESS:
      return (payload.pagination && payload.pagination.cursor) || state;
    case TWITCH_CLEAR_VIDEOS:
      return null;
    default:
      return state;
  }
};

const fetchedAll = (state = false, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_VIDEOS_SUCCESS:
      return !(payload.pagination && payload.pagination.cursor);
    case TWITCH_CLEAR_VIDEOS:
      return false;
    default:
      return state;
  }
};

const [
  isFetchingVideos,
  fetchedVideosSuccessfully,
] = buildActionReducers({
  start: TWITCH_FETCH_VIDEOS,
  success: TWITCH_FETCH_VIDEOS_SUCCESS,
  error: TWITCH_FETCH_VIDEOS_ERROR,
  clear: TWITCH_CLEAR_VIDEOS,
});

const videos = combineReducers({
  list,
  cursor,
  fetchedAll,
});

export {
  videos,
  isFetchingVideos,
  fetchedVideosSuccessfully,
};
