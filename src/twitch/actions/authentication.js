import { redirectToLoginPage } from 'twitch/api';
import setChannel from './setChannel';
import saveToken from './saveToken';
import { saveUser } from './fetchUser';
import { saveFollowed } from './fetchFollowed';
import { saveStreams } from './fetchStreams';

export const twitchLogin = () => () => {
  redirectToLoginPage();
};

export const twitchLogout = () => (dispatch) => {
  dispatch(setChannel(null));
  dispatch(saveToken(null));
  dispatch(saveUser({}));
  dispatch(saveFollowed([]));
  dispatch(saveStreams([]));
};
