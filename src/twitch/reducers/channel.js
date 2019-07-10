import { utils } from 'shared';
import { TWITCH_SET_CHANNEL, TWITCH_CLEAR_CHANNEL } from '../actionTypes';

const channel = (state = utils.loadFromLocalStorage('channel'), action) => {
  switch (action.type) {
    case TWITCH_SET_CHANNEL:
      utils.saveInLocalStorage('channel', action.channel);
      return action.channel;
    case TWITCH_CLEAR_CHANNEL:
      utils.deleteInLocalStorage('channel');
      return null;
    default:
      return state;
  }
};

export default channel;
