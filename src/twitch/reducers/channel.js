import { TWITCH_SET_CHANNEL, TWITCH_CLEAR_CHANNEL } from '../actionTypes';

const channel = (state = null, action) => {
  switch (action.type) {
    case TWITCH_SET_CHANNEL:
      return action.channel;
    case TWITCH_CLEAR_CHANNEL:
      return null;
    default:
      return state;
  }
};

export default channel;
