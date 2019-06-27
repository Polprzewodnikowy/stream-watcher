import { buildActionCreator } from 'shared';
import { TWITCH_SET_CHANNEL } from 'twitch/actionTypes';

export default buildActionCreator(TWITCH_SET_CHANNEL, 'channel');
