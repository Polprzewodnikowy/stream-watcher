import { combineReducers } from 'redux';
import token from './token';
import {
  user,
  isFetchingUser,
  fetchedUserSuccessfully,
} from './user';
import {
  followedIds,
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
} from './followedIds';
import {
  followed,
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
} from './followed';
import {
  streams,
  isFetchingStreams,
  fetchedStreamsSuccessfully,
} from './streams';
import {
  games,
  isFetchingGames,
  fetchedGamesSuccessfully,
} from './games';
import channel from './channel';
import showChat from './showChat';
import refreshInterval from './refreshInterval';
import errors from './errors';

const twitch = combineReducers({
  token,
  user,
  isFetchingUser,
  fetchedUserSuccessfully,
  followedIds,
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
  followed,
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
  streams,
  isFetchingStreams,
  fetchedStreamsSuccessfully,
  games,
  isFetchingGames,
  fetchedGamesSuccessfully,
  channel,
  showChat,
  refreshInterval,
  errors,
});

export default twitch;
