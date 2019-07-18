import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '1px 5px',
    position: 'absolute',
    opacity: 0.8,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.black,
  },
  typography: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const VideoThumbnailLabel = ({
  bottom,
  children,
  left,
  offsetHorizontal,
  offsetVertical,
  right,
  top,
}) => {
  const styles = useStyles();

  return (
    <div
      className={styles.container}
      style={{
        bottom: bottom ? offsetVertical : null,
        left: left ? offsetHorizontal : null,
        right: right ? offsetHorizontal : null,
        top: top ? offsetVertical : null,
      }}
    >
      <Typography
        className={styles.typography}
        component="div"
        variant="body2"
        color="textPrimary"
      >
        {children}
      </Typography>
    </div>
  );
};

VideoThumbnailLabel.defaultProps = {
  bottom: false,
  children: null,
  left: false,
  offsetHorizontal: '5px',
  offsetVertical: '5px',
  right: false,
  top: false,
};

VideoThumbnailLabel.propTypes = {
  children: PropTypes.node,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  offsetHorizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetVertical: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.bool,
  top: PropTypes.bool,
};

export default VideoThumbnailLabel;
