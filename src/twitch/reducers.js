import { combineReducers } from 'redux';
import { loadFromLocalStorage, saveInLocalStorage } from 'shared/utils';
import {
  TWITCH_SAVE_TOKEN,
  TWITCH_SAVE_USER,
  TWITCH_SAVE_FOLLOWED,
  TWITCH_SAVE_STREAMS,
  TWITCH_SAVE_GAMES,
  TWITCH_SET_REFRESH_INTERVAL,
  TWITCH_SET_CHANNEL,
  TWITCH_SET_SHOW_CHAT_STATE,
} from 'twitch/actionTypes';
import { DEFAULT_REFRESH_INTERVAL } from 'twitch/constants';

const token = (state = loadFromLocalStorage('token'), action) => {
  switch (action.type) {
    case TWITCH_SAVE_TOKEN:
      saveInLocalStorage('token', action.token);
      return action.token;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case TWITCH_SAVE_USER:
      return action.user;
    default:
      return state;
  }
};

const followed = (state = [], action) => {
  switch (action.type) {
    case TWITCH_SAVE_FOLLOWED:
      return action.followed;
    default:
      return state;
  }
};

const streams = (state = [], action) => {
  switch (action.type) {
    case TWITCH_SAVE_STREAMS:
      return action.streams;
    default:
      return state;
  }
};

const games = (state = [], action) => {
  switch (action.type) {
    case TWITCH_SAVE_GAMES:
      return state.concat(action.games);
    default:
      return state;
  }
};

const refreshInterval = (state = loadFromLocalStorage('refreshInterval') || DEFAULT_REFRESH_INTERVAL, action) => {
  switch (action.type) {
    case TWITCH_SET_REFRESH_INTERVAL:
      saveInLocalStorage('refreshInterval', action.interval);
      return action.interval;
    default:
      return state;
  }
};

const channel = (state = loadFromLocalStorage('channel'), action) => {
  switch (action.type) {
    case TWITCH_SET_CHANNEL:
      saveInLocalStorage('channel', action.channel);
      return action.channel;
    default:
      return state;
  }
};

const showChat = (state = loadFromLocalStorage('showChat') || true, action) => {
  switch (action.type) {
    case TWITCH_SET_SHOW_CHAT_STATE:
      saveInLocalStorage('showChat', action.state);
      return action.state;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  user,
  followed,
  streams,
  games,
  channel,
  refreshInterval,
  showChat,
});
