import { createSelector } from 'reselect';
import { utils } from 'shared';

export const getChannel = twitch => twitch.channel;
export const getFollowed = twitch => twitch.followed;
export const getStreams = twitch => twitch.streams;
export const getGames = twitch => twitch.games;

export const getSelectedChannel = createSelector(
  getChannel,
  getFollowed,
  (channel, followed) => followed.find(({ login }) => login === channel) || {},
);

export const getSelectedStream = createSelector(
  getSelectedChannel,
  getStreams,
  (selectedChannel, streams) => streams
    .find(({ userId }) => userId === selectedChannel.userId) || {},
);

export const getChannelAvatarUrl = createSelector(
  getSelectedChannel,
  selectedChannel => selectedChannel.avatarUrl,
);

export const getChannelName = createSelector(
  getSelectedChannel,
  selectedChannel => selectedChannel.name,
);

export const getStreamTitle = createSelector(
  getSelectedStream,
  selectedStream => selectedStream.title,
);

export const getStreamsWithGames = createSelector(
  getStreams,
  getGames,
  (streams, games) => utils.mergeBy(streams, games, 'gameId'),
);

export const getChannelList = createSelector(
  getFollowed,
  getStreamsWithGames,
  (followed, streams) => utils.sortDescBy(utils.mergeBy(followed, streams, 'userId'), 'viewers'),
);
