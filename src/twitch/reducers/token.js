import { TWITCH_CLEAR_TOKEN, TWITCH_SAVE_TOKEN } from 'twitch/actionTypes';

const token = (state = null, { type, newToken }) => {
  switch (type) {
    case TWITCH_SAVE_TOKEN:
      return newToken;
    case TWITCH_CLEAR_TOKEN:
      return null;
    default:
      return state;
  }
};

export default token;
