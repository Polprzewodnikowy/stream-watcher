import { messages } from 'shared';

/* eslint-disable camelcase */
const transformUser = ({
  id,
  login,
  display_name,
  profile_image_url,
}) => ({
  userId: Number(id),
  login,
  name: display_name,
  avatarUrl: profile_image_url,
});

const transformStream = ({
  game_id,
  title,
  type,
  user_id,
  user_name,
  viewer_count,
}) => ({
  userId: Number(user_id),
  name: user_name,
  title,
  type,
  gameId: Number(game_id),
  viewers: Number(viewer_count),
});

const transformGame = ({
  id,
  name,
}) => ({
  gameId: Number(id),
  name,
});

export const transformError = ({
  error,
  status,
  message,
}) => ({
  errorType: `${messages.en.twitch.error}: ${error}`,
  status,
  message,
});

export const transformUsers = ({ data }) => data.map(user => transformUser(user));

export const transformUsersFollows = ({ data }) => data.map(item => item.to_id);

export const transformStreams = ({ data }) => data.map(stream => transformStream(stream));

export const transformGames = ({ data }) => data.map(game => transformGame(game));

export const filterAndTransformGameIds = (streams, games) => streams
  .filter(({ gameId }) => !games.find(game => gameId === game.gameId))
  .filter(({ gameId }) => gameId !== 0)
  .map(({ gameId }) => gameId);
