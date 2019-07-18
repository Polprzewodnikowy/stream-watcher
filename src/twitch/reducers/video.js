import { TWITCH_SET_VIDEO, TWITCH_CLEAR_VIDEO } from '../actionTypes';

const video = (state = null, { type, selectedVideo }) => {
  switch (type) {
    case TWITCH_SET_VIDEO:
      return selectedVideo;
    case TWITCH_CLEAR_VIDEO:
      return null;
    default:
      return state;
  }
};

export default video;
