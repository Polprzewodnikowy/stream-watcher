import { createSelector } from 'reselect';
import { utils } from 'shared';

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
    twitch => twitch.streams.list,
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
    twitch => twitch.streams.list,
    twitch => twitch.games,
  ],
  (followedList, streamsList, gamesList) => {
    const streams = utils.mergeBy(streamsList, gamesList, 'gameId');
    const channels = utils.mergeBy(followedList, streams, 'userId');
    return utils.sortDescBy(channels, 'viewers');
  },
);
