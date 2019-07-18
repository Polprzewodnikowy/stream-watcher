import { clearToken } from './saveToken';
import { clearUser } from './fetchUsers';
import { clearFollowed } from './fetchFollowed';
import { clearStreams } from './fetchStreams';
import { clearGames } from './fetchGames';
import { clearVideos } from './fetchVideos';
import { clearChannel } from './setChannel';
import { clearVideo } from './setVideo';
import { getAuthorizationUrl } from '../utils';

export const twitchLogin = () => () => {
  window.location.replace(getAuthorizationUrl());
};

export const twitchLogout = () => (dispatch) => {
  dispatch(clearToken());
  dispatch(clearUser());
  dispatch(clearFollowed());
  dispatch(clearStreams());
  dispatch(clearGames());
  dispatch(clearVideos());
  dispatch(clearChannel());
  dispatch(clearVideo());
};
