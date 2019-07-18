import PropTypes from 'prop-types';

export const channel = {
  avatarUrl: PropTypes.string,
  gameTitle: PropTypes.string,
  login: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  userId: PropTypes.number,
  viewers: PropTypes.number,
};
export const channelType = PropTypes.shape(channel);
export const channelsType = PropTypes.arrayOf(channelType);

export const video = {
  videoId: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  createdAt: PropTypes.string,
  publishedAt: PropTypes.string,
  viewCount: PropTypes.number,
  thumbnailUrl: PropTypes.string,
};
export const videoType = PropTypes.shape(video);
export const videosType = PropTypes.arrayOf(videoType);
