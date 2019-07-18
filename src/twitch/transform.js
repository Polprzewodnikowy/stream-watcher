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
  viewer_count,
}) => ({
  userId: Number(user_id),
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
  gameTitle: name,
});

const transformVideo = ({
  created_at,
  description,
  duration,
  id,
  published_at,
  thumbnail_url,
  title,
  user_id,
  view_count,
}) => ({
  videoId: Number(id),
  userId: Number(user_id),
  title,
  description,
  duration,
  createdAt: created_at,
  publishedAt: published_at,
  viewCount: Number(view_count),
  thumbnailUrl: thumbnail_url,
});


export const transformError = ({
  error,
  status,
  message,
}) => ({
  errorType: `${messages.en.twitch.error}: ${error}`,
  status: Number(status),
  message,
});

export const transformUsers = data => data.map(user => transformUser(user));
export const transformUsersFollows = data => data.map(item => Number(item.to_id));
export const transformStreams = data => data.map(stream => transformStream(stream));
export const transformGames = data => data.map(game => transformGame(game));
export const transformVideos = data => data.map(video => transformVideo(video));

export const filterAndTransformGameIds = (streams, games) => streams
  .filter(({ gameId }) => !games.find(game => gameId === game.gameId))
  .filter(({ gameId }) => gameId !== 0)
  .map(({ gameId }) => gameId);
