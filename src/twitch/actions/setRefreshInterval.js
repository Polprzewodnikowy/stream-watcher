import { buildActionCreator } from 'shared';
import { TWITCH_SET_REFRESH_INTERVAL } from '../actionTypes';

export const setRefreshInterval = buildActionCreator(TWITCH_SET_REFRESH_INTERVAL, 'interval');
