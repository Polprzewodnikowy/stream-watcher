import { buildActionCreator } from 'shared';
import { TWITCH_SET_SHOW_VIDEOS_STATE } from '../actionTypes';

const appSetShowVideosState = buildActionCreator(TWITCH_SET_SHOW_VIDEOS_STATE, 'show');

export const setShowVideosState = state => dispatch => dispatch(appSetShowVideosState(state));

export const toggleShowVideosState = () => (dispatch, getState) => {
  const { twitch: { showVideos } } = getState();

  return dispatch(appSetShowVideosState(!showVideos));
};
