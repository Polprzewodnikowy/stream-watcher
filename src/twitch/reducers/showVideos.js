import { TWITCH_SET_SHOW_VIDEOS_STATE } from '../actionTypes';

const showVideos = (state = false, { type, show }) => {
  switch (type) {
    case TWITCH_SET_SHOW_VIDEOS_STATE:
      return show;
    default:
      return state;
  }
};

export default showVideos;
