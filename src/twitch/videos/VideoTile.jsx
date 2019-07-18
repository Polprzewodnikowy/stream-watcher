
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as twitchTypes from '../types';
import VideoThumbnail from './VideoThumbnail';

const useStyles = makeStyles(theme => ({
  tile: {
    display: 'grid',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.dark,
    boxShadow: theme.shadows[8],
  },
  title: {
    width: '100%',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1.25)}px`,
    textAlign: 'left',
  },
}));

const VideoTile = ({ className, onVideoClick, video }) => {
  const styles = useStyles();

  const {
    duration,
    publishedAt,
    thumbnailUrl,
    title,
    videoId,
    viewCount,
  } = video;

  return (
    <ButtonBase
      className={classnames(className, styles.tile)}
      onClick={() => onVideoClick(videoId)}
    >
      <VideoThumbnail
        duration={duration}
        publishedAt={publishedAt}
        thumbnailUrl={thumbnailUrl}
        viewCount={viewCount}
      />
      <Typography className={styles.title} variant="body1" color="textPrimary" noWrap>
        {title}
      </Typography>
    </ButtonBase>
  );
};

VideoTile.defaultProps = {
  className: null,
  onVideoClick: () => {},
  video: {},
};

VideoTile.propTypes = {
  className: PropTypes.string,
  onVideoClick: PropTypes.func,
  video: twitchTypes.videoType,
};

export default VideoTile;
