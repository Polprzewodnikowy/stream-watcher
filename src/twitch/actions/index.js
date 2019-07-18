import { twitchLogin, twitchLogout } from './authentication';
import { saveToken, clearToken } from './saveToken';
import { fetchUser, clearUser, fetchUsers } from './fetchUsers';
import { fetchFollowed, clearFollowed } from './fetchFollowed';
import { fetchStreams, clearStreams } from './fetchStreams';
import { fetchGames, clearGames } from './fetchGames';
import { fetchVideos, clearVideos } from './fetchVideos';
import { fetchAll, clearAll } from './fetchAll';
import { clearErrors } from './common';
import { setRefreshInterval } from './setRefreshInterval';
import { setChannel, clearChannel } from './setChannel';
import { setVideo, clearVideo } from './setVideo';
import { setShowChatState, toggleShowChatState } from './toggleChat';
import { setShowVideosState, toggleShowVideosState } from './toggleVideos';

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
  fetchVideos,
  clearVideos,
  fetchAll,
  clearAll,
  clearErrors,
  setRefreshInterval,
  setChannel,
  clearChannel,
  setVideo,
  clearVideo,
  setShowChatState,
  toggleShowChatState,
  setShowVideosState,
  toggleShowVideosState,
};
