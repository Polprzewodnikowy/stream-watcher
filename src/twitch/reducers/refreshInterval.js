import { DEFAULT_REFRESH_INTERVAL } from '../constants';
import { TWITCH_SET_REFRESH_INTERVAL } from '../actionTypes';

const refreshInterval = (state = DEFAULT_REFRESH_INTERVAL, { type, interval }) => {
  switch (type) {
    case TWITCH_SET_REFRESH_INTERVAL:
      return interval;
    default:
      return state;
  }
};

export default refreshInterval;
