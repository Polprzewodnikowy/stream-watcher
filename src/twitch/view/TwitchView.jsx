import PropTypes from 'prop-types';
import React from 'react';
import { Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { PlayerWithChatContainer } from '../playerWithChat';
import { TwitchVideosContainer } from '../videos';
import { TwitchLogicContainer } from '../logic';
import { TwitchErrorModalContainer } from '../errors';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

const TwitchView = ({ showVideos }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <PlayerWithChatContainer />
      </div>
      <Slide mountOnEnter unmountOnExit direction="down" in={showVideos}>
        <div className={styles.wrapper}>
          <TwitchVideosContainer />
        </div>
      </Slide>
      <TwitchLogicContainer />
      <TwitchErrorModalContainer />
    </div>
  );
};

TwitchView.defaultProps = {
  showVideos: false,
};

TwitchView.propTypes = {
  showVideos: PropTypes.bool,
};

export default TwitchView;
