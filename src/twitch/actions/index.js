import { twitchLogin, twitchLogout } from './authentication';
import { saveToken, clearToken } from './saveToken';
import { fetchUser, clearUser, fetchUsers } from './fetchUsers';
import { fetchFollowed, clearFollowed } from './fetchFollowed';
import { fetchStreams, clearStreams } from './fetchStreams';
import { fetchGames, clearGames } from './fetchGames';
import { fetchAll } from './fetchAll';
import { clearErrors } from './common';
import { setRefreshInterval } from './setRefreshInterval';
import { setChannel, clearChannel } from './setChannel';
import { setShowChatState, toggleShowChatState } from './toggleChat';

export {
  twitchLogin,
  twitchLogout,
  saveToken,
  clearToken,
  fetchUser,
  fetchUsers,
  clearUser,
  fetchFollowed,
  clearFollowed,
  fetchStreams,
  clearStreams,
  fetchGames,
  clearGames,
  fetchAll,
  clearErrors,
  setRefreshInterval,
  setChannel,
  clearChannel,
  setShowChatState,
  toggleShowChatState,
};
