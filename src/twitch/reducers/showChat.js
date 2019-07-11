import { TWITCH_SET_SHOW_CHAT_STATE } from '../actionTypes';

const showChat = (state = true, action) => {
  switch (action.type) {
    case TWITCH_SET_SHOW_CHAT_STATE:
      return action.state;
    default:
      return state;
  }
};

export default showChat;
