import { buildActionCreator, buildRequestActionCreator } from 'shared';
import { TWITCH_CLEAR_ERRORS } from '../actionTypes';
import { getTwitchClientID } from '../utils';

export const buildTwitchRequestActionCreator = options => (dispatch, getState) => {
  const { twitch: { token } } = getState();

  const {
    headers,
    ...optionParams
  } = options;

  const twitchHeaders = {
    'Client-ID': getTwitchClientID(),
  };

  if (token) {
    twitchHeaders.Authorization = `Bearer ${token}`;
  }

  Object.assign(twitchHeaders, headers);

  return dispatch(buildRequestActionCreator({
    ...optionParams,
    headers: twitchHeaders,
  }));
};

export const clearErrors = buildActionCreator(TWITCH_CLEAR_ERRORS);
