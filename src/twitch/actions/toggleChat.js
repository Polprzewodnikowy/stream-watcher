import { buildActionCreator } from 'shared';
import { TWITCH_SET_SHOW_CHAT_STATE } from 'twitch/actionTypes';

const appSetShowChatState = buildActionCreator(TWITCH_SET_SHOW_CHAT_STATE, 'state');

export const setShowChatState = state => dispatch => dispatch(appSetShowChatState(state));

export const toggleShowChatState = () => (dispatch, getState) => {
  const { twitch: { showChat } } = getState();

  return dispatch(appSetShowChatState(!showChat));
};
