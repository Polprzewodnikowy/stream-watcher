import { TWITCH_CLEAR_STREAMS, TWITCH_FETCH_STREAMS_SUCCESS } from '../actionTypes';

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

export default streams;
