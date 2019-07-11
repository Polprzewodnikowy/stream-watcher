import { TWITCH_CLEAR_TOKEN, TWITCH_SAVE_TOKEN } from 'twitch/actionTypes';

const token = (state = null, action) => {
  switch (action.type) {
    case TWITCH_SAVE_TOKEN:
      return action.token;
    case TWITCH_CLEAR_TOKEN:
      return null;
    default:
      return state;
  }
};

export default token;
