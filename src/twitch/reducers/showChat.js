import { utils } from 'shared';
import { TWITCH_SET_SHOW_CHAT_STATE } from '../actionTypes';

const showChat = (state = utils.loadFromLocalStorage('showChat') || true, action) => {
  switch (action.type) {
    case TWITCH_SET_SHOW_CHAT_STATE:
      utils.saveInLocalStorage('showChat', action.state);
      return action.state;
    default:
      return state;
  }
};

export default showChat;
