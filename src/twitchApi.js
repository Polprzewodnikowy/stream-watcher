const API_URL = 'https://api.twitch.tv/kraken';
const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

export async function getChannels(username) {
  const headers = { headers: { 'Client-ID': TWITCH_CLIENT_ID } };

  const { follows } = await fetch(
    `${API_URL}/users/${username}/follows/channels?limit=100&sortby=last_broadcast`, headers
  )
    .then(response => response.json());

  const names = follows.map(stream => stream.channel.name).join(',');

  const { streams } = await fetch(
    `${API_URL}/streams/?channel=${names}&limit=100`, headers
  )
    .then(response => response.json());

  return follows.map(stream => {
    return Object.assign(stream, streams.find(liveStream => liveStream.channel._id === stream.channel._id));
  })
    .map((stream, index) => {
      return {
        name: stream.channel.name,
        displayName: stream.channel.display_name,
        logo: stream.channel.logo,
        game: stream.channel.game,
        status: stream.channel.status,
        streamType: stream.stream_type || '',
        viewers: stream.viewers || -1,
        index: index
      }
    })
    .sort((a, b) => {
      if (a.viewers < b.viewers) return 1;
      if (a.viewers > b.viewers) return -1;
      return a.index - b.index;
    });
}
