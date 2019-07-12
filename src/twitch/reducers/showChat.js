import { TWITCH_SET_SHOW_CHAT_STATE } from '../actionTypes';

const showChat = (state = true, { type, show }) => {
  switch (type) {
    case TWITCH_SET_SHOW_CHAT_STATE:
      return show;
    default:
      return state;
  }
};

export default showChat;
