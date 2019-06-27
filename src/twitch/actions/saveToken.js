import { buildActionCreator } from 'shared';
import { TWITCH_SAVE_TOKEN } from 'twitch/actionTypes';

export default buildActionCreator(TWITCH_SAVE_TOKEN, 'token');
