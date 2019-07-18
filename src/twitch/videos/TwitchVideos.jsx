import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Loader } from 'shared';
import VideoTileContainer from './VideoTileContainer';
import * as twitchTypes from '../types';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    position: 'relative',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  videos: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
  },
  tile: {
    margin: theme.spacing(2),
    marginTop: 0,
  },
}));

const TwitchVideos = ({
  channel,
  clearData,
  fetchedAll,
  fetchData,
  followed,
  isLoading,
  videos,
}) => {
  const styles = useStyles();

  useEffect(() => {
    fetchData();
    return () => {
      clearData();
    };
  }, [channel, followed, fetchData, clearData]);

  const handleScroll = useCallback(({ target: { scrollHeight, scrollTop, clientHeight } }) => {
    if (((scrollHeight - scrollTop) <= (clientHeight + 100)) && !isLoading && !fetchedAll) {
      fetchData();
    }
  }, [isLoading, fetchedAll, fetchData]);

  const isInitialLoading = isLoading && videos.length === 0;
  const isSubsequentLoading = isLoading && !isInitialLoading;

  return (
    <div className={styles.container} onScroll={handleScroll}>
      <Loader variant="linear" position="sticky" isLoading={isSubsequentLoading} zIndex={1} />
      <Loader variant="overlay" position="absolute" isLoading={isInitialLoading} zIndex={1} />
      <div className={styles.videos}>
        {videos.map(video => (
          <VideoTileContainer
            key={video.videoId}
            className={styles.tile}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

TwitchVideos.propTypes = {
  channel: PropTypes.string.isRequired,
  clearData: PropTypes.func.isRequired,
  fetchedAll: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  followed: twitchTypes.channelsType.isRequired,
  isLoading: PropTypes.bool.isRequired,
  videos: twitchTypes.videosType.isRequired,
};

export default TwitchVideos;
