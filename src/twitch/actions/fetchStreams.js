import { buildActionCreator } from 'shared';
import { getStreams } from 'twitch/api';
import { TWITCH_SAVE_STREAMS } from 'twitch/actionTypes';
import { transformStreams } from 'twitch/transform';
import fetchGames from './fetchGames';

export const saveStreams = buildActionCreator(TWITCH_SAVE_STREAMS, 'streams');

const fetchStreams = () => async (dispatch, getState) => {
  const { twitch: { token, followed } } = getState();

  if (followed.length > 0) {
    const ids = followed.map(({ userId }) => userId);

    getStreams(ids, token)
      .then(transformStreams)
      .then(streams => dispatch(saveStreams(streams)))
      .then(() => dispatch(fetchGames()));
  }

  return null;
};

export default fetchStreams;
