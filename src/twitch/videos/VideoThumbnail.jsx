import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import VideoThumbnailLabel from './VideoThumbnailLabel';
import {
  getThumbnailUrl,
  getDurationText,
  getViewCountText,
  getPublishedAtText,
} from '../utils';

const useStyles = makeStyles(theme => ({
  thumbnail: {
    width: '100%',
    height: 0,
    position: 'relative',
    paddingBottom: 'calc(100% / (16/9))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundColor: theme.palette.grey[700],
  },
  labelIcon: {
    marginRight: '5px',
  },
}));

const VideoThumbnail = ({
  duration,
  publishedAt,
  thumbnailHeight,
  thumbnailUrl,
  thumbnailWidth,
  viewCount,
}) => {
  const styles = useStyles();

  return (
    <div
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${getThumbnailUrl(thumbnailUrl, thumbnailWidth, thumbnailHeight)})` }}
    >
      <VideoThumbnailLabel top left>
        <AccessTime className={styles.labelIcon} fontSize="inherit" />
        {getDurationText(duration)}
      </VideoThumbnailLabel>
      <VideoThumbnailLabel bottom left>
        {getViewCountText(viewCount)}
      </VideoThumbnailLabel>
      <VideoThumbnailLabel bottom right>
        {getPublishedAtText(publishedAt)}
      </VideoThumbnailLabel>
    </div>
  );
};

VideoThumbnail.defaultProps = {
  duration: '',
  publishedAt: '',
  thumbnailHeight: 360,
  thumbnailUrl: '',
  thumbnailWidth: 640,
  viewCount: 0,
};

VideoThumbnail.propTypes = {
  duration: PropTypes.string,
  publishedAt: PropTypes.string,
  thumbnailHeight: PropTypes.number,
  thumbnailUrl: PropTypes.string,
  thumbnailWidth: PropTypes.number,
  viewCount: PropTypes.number,
};

export default VideoThumbnail;
