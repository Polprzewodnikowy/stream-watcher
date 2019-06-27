import { buildActionCreator } from 'shared';
import { getGames } from 'twitch/api';
import { TWITCH_SAVE_GAMES } from 'twitch/actionTypes';
import { transformGames } from 'twitch/transform';

export const saveGames = buildActionCreator(TWITCH_SAVE_GAMES, 'games');

const fetchGames = () => async (dispatch, getState) => {
  const { twitch: { token, streams, games } } = getState();

  const ids = streams
    .filter(({ gameId }) => !games.find(game => gameId === game.gameId))
    .map(({ gameId }) => gameId);

  if (ids.length > 0) {
    return getGames(ids, token)
      .then(transformGames)
      .then(newGames => dispatch(saveGames(newGames)));
  }

  return null;
};

export default fetchGames;
