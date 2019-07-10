import { utils } from 'shared';
import { TWITCH_CLEAR_TOKEN, TWITCH_SAVE_TOKEN } from 'twitch/actionTypes';

const token = (state = utils.loadFromLocalStorage('token'), action) => {
  switch (action.type) {
    case TWITCH_SAVE_TOKEN:
      utils.saveInLocalStorage('token', action.token);
      return action.token;
    case TWITCH_CLEAR_TOKEN:
      utils.deleteInLocalStorage('token');
      return null;
    default:
      return state;
  }
};

export default token;
