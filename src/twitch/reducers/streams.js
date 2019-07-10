import { combineReducers } from 'redux';
import { TWITCH_CLEAR_STREAMS, TWITCH_FETCH_STREAMS_SUCCESS } from '../actionTypes';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_STREAMS_SUCCESS:
      return payload.data;
    case TWITCH_CLEAR_STREAMS:
      return [];
    default:
      return state;
  }
};

const cursor = (state = null, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_STREAMS_SUCCESS:
      return (payload.pagination && payload.pagination.cursor) || null;
    case TWITCH_CLEAR_STREAMS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  cursor,
});
