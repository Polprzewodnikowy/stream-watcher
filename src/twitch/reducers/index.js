import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import followedIds from './followedIds';
import followed from './followed';
import streams from './streams';
import games from './games';
import channel from './channel';
import showChat from './showChat';
import refreshInterval from './refreshInterval';
import errors from './errors';

const twitch = combineReducers({
  token,
  user,
  followedIds,
  followed,
  streams,
  games,
  channel,
  showChat,
  refreshInterval,
  errors,
});

export default twitch;
