import saveToken from './saveToken';
import fetchUser from './fetchUser';
import fetchFollowed from './fetchFollowed';
import fetchStreams from './fetchStreams';
import fetchGames from './fetchGames';
import fetchAll from './fetchAll';
import setRefreshInterval from './setRefreshInterval';
import setChannel from './setChannel';
import { setShowChatState, toggleShowChatState } from './toggleChat';
import { twitchLogin, twitchLogout } from './authentication';

export {
  saveToken,
  fetchUser,
  fetchFollowed,
  fetchStreams,
  fetchGames,
  fetchAll,
  setRefreshInterval,
  setChannel,
  setShowChatState,
  toggleShowChatState,
  twitchLogin,
  twitchLogout,
};
