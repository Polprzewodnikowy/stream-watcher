import { buildActionCreator } from 'shared';
import { TWITCH_SET_REFRESH_INTERVAL } from 'twitch/actionTypes';

export default buildActionCreator(TWITCH_SET_REFRESH_INTERVAL, 'interval');
