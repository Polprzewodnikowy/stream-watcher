import { buildActionCreator } from 'shared';
import { TWITCH_SET_CHANNEL, TWITCH_CLEAR_CHANNEL } from '../actionTypes';

export const setChannel = buildActionCreator(TWITCH_SET_CHANNEL, 'selectedChannel');
export const clearChannel = buildActionCreator(TWITCH_CLEAR_CHANNEL);
