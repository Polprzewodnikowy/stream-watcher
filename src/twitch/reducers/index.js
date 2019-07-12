import { combineReducers } from 'redux';
import token from './token';
import {
  user,
  isFetchingUser,
  fetchedUserSuccessfully,
  fetchedUserInitial,
} from './user';
import {
  followedIds,
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
  fetchedFollowedIdsInitial,
} from './followedIds';
import {
  followed,
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
  fetchedFollowedInitial,
} from './followed';
import {
  streams,
  isFetchingStreams,
  fetchedStreamsSuccessfully,
  fetchedStreamsInitial,
} from './streams';
import {
  games,
  isFetchingGames,
  fetchedGamesSuccessfully,
  fetchedGamesInitial,
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
  fetchedUserInitial,
  followedIds,
  isFetchingFollowedIds,
  fetchedFollowedIdsSuccessfully,
  fetchedFollowedIdsInitial,
  followed,
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
  fetchedFollowedInitial,
  streams,
  isFetchingStreams,
  fetchedStreamsSuccessfully,
  fetchedStreamsInitial,
  games,
  isFetchingGames,
  fetchedGamesSuccessfully,
  fetchedGamesInitial,
  channel,
  showChat,
  refreshInterval,
  errors,
});

export default twitch;
