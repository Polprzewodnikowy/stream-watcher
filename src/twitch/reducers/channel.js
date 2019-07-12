import { TWITCH_SET_CHANNEL, TWITCH_CLEAR_CHANNEL } from '../actionTypes';

const channel = (state = null, { type, selectedChannel }) => {
  switch (type) {
    case TWITCH_SET_CHANNEL:
      return selectedChannel;
    case TWITCH_CLEAR_CHANNEL:
      return null;
    default:
      return state;
  }
};

export default channel;
