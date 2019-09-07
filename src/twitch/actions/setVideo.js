import { buildActionCreator } from 'shared';
import { TWITCH_SET_VIDEO, TWITCH_CLEAR_VIDEO } from '../actionTypes';

export const setVideo = (video) => buildActionCreator(TWITCH_SET_VIDEO, 'selectedVideo')(`v${video}`);
export const clearVideo = buildActionCreator(TWITCH_CLEAR_VIDEO);
