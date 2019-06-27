import { createSelector } from 'reselect';

export const getToken = twitch => twitch.token;

export const getChannel = twitch => twitch.channel;

export const getChannelAvatarUrl = createSelector(
  [
    twitch => twitch.channel,
    twitch => twitch.followed,
  ],
  (channel, followed) => {
    const foundChannel = followed.find(user => user.login === channel);
    return foundChannel && foundChannel.avatarUrl;
  },
);

export const getChannelName = createSelector(
  [
    twitch => twitch.channel,
    twitch => twitch.followed,
  ],
  (channel, followed) => {
    const foundChannel = followed.find(user => user.login === channel);
    return foundChannel && foundChannel.name;
  },
);

export const getStreamTitle = createSelector(
  [
    twitch => twitch.channel,
    twitch => twitch.followed,
    twitch => twitch.streams,
  ],
  (channel, followed, streams) => {
    const foundChannel = followed.find(user => user.login === channel);

    if (foundChannel) {
      const foundStream = streams.find(stream => stream.userId === foundChannel.userId);
      return foundStream && foundStream.title;
    }

    return null;
  },
);

export const getChannelList = createSelector(
  [
    twitch => twitch.followed,
    twitch => twitch.streams,
    twitch => twitch.games,
  ],
  (followed, streams, games) => {
    const streamsWithGameTitle = streams.map((stream) => {
      const game = games.find(({ gameId }) => stream.gameId === gameId);
      const gameTitle = game && game.name;
      return { ...stream, gameTitle };
    });

    return followed
      .map(user => ({
        viewers: -1,
        ...user,
        ...streamsWithGameTitle.find(({ userId }) => user.userId === userId),
      }))
      .sort((a, b) => b.viewers - a.viewers);
  },
);
