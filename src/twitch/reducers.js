import { combineReducers } from 'redux';
import { utils } from 'shared';
import {
  TWITCH_SAVE_TOKEN,
  TWITCH_CLEAR_TOKEN,
  TWITCH_FETCH_USER_SUCCESS,
  TWITCH_CLEAR_USER,
  TWITCH_FETCH_FOLLOWED_SUCCESS,
  TWITCH_CLEAR_FOLLOWED,
  TWITCH_FETCH_STREAMS_SUCCESS,
  TWITCH_CLEAR_STREAMS,
  TWITCH_FETCH_GAMES_SUCCESS,
  TWITCH_CLEAR_GAMES,
  TWITCH_SET_CHANNEL,
  TWITCH_CLEAR_CHANNEL,
  TWITCH_SET_SHOW_CHAT_STATE,
  TWITCH_SET_REFRESH_INTERVAL,
} from './actionTypes';
import { DEFAULT_REFRESH_INTERVAL } from './constants';

const { loadFromLocalStorage, saveInLocalStorage, deleteInLocalStorage } = utils;

const token = (state = loadFromLocalStorage('token'), action) => {
  switch (action.type) {
    case TWITCH_SAVE_TOKEN:
      saveInLocalStorage('token', action.token);
      return action.token;
    case TWITCH_CLEAR_TOKEN:
      deleteInLocalStorage('token');
      return null;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case TWITCH_FETCH_USER_SUCCESS:
      return action.payload[0];
    case TWITCH_CLEAR_USER:
      return {};
    default:
      return state;
  }
};

const followed = (state = [], action) => {
  switch (action.type) {
    case TWITCH_FETCH_FOLLOWED_SUCCESS:
      return action.payload;
    case TWITCH_CLEAR_FOLLOWED:
      return [];
    default:
      return state;
  }
};

const streams = (state = [], action) => {
  switch (action.type) {
    case TWITCH_FETCH_STREAMS_SUCCESS:
      return action.payload;
    case TWITCH_CLEAR_STREAMS:
      return [];
    default:
      return state;
  }
};

const games = (state = [], action) => {
  switch (action.type) {
    case TWITCH_FETCH_GAMES_SUCCESS:
      return state.concat(action.payload);
    case TWITCH_CLEAR_GAMES:
      return [];
    default:
      return state;
  }
};

const channel = (state = loadFromLocalStorage('channel'), action) => {
  switch (action.type) {
    case TWITCH_SET_CHANNEL:
      saveInLocalStorage('channel', action.channel);
      return action.channel;
    case TWITCH_CLEAR_CHANNEL:
      deleteInLocalStorage('channel');
      return null;
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

const refreshInterval = (state = loadFromLocalStorage('refreshInterval') || DEFAULT_REFRESH_INTERVAL, action) => {
  switch (action.type) {
    case TWITCH_SET_REFRESH_INTERVAL:
      saveInLocalStorage('refreshInterval', action.interval);
      return action.interval;
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
  showChat,
  refreshInterval,
});
