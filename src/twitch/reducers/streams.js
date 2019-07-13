import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_STREAMS,
  TWITCH_FETCH_STREAMS_SUCCESS,
  TWITCH_FETCH_STREAMS_ERROR,
  TWITCH_CLEAR_STREAMS,
} from '../actionTypes';

const streams = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_STREAMS_SUCCESS:
      return payload.data;
    case TWITCH_CLEAR_STREAMS:
      return [];
    default:
      return state;
  }
};

const [
  isFetchingStreams,
  fetchedStreamsSuccessfully,
] = buildActionReducers({
  start: TWITCH_FETCH_STREAMS,
  success: TWITCH_FETCH_STREAMS_SUCCESS,
  error: TWITCH_FETCH_STREAMS_ERROR,
  clear: TWITCH_CLEAR_STREAMS,
});

export {
  streams,
  isFetchingStreams,
  fetchedStreamsSuccessfully,
};
