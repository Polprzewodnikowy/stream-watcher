import { buildActionCreator } from 'shared';
import { TWITCH_SAVE_TOKEN, TWITCH_CLEAR_TOKEN } from '../actionTypes';

export const saveToken = buildActionCreator(TWITCH_SAVE_TOKEN, 'newToken');
export const clearToken = buildActionCreator(TWITCH_CLEAR_TOKEN);
