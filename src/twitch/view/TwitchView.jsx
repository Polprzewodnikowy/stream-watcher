import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TwitchLogicContainer } from 'twitch';
import TwitchPlayerContainer from 'twitch/player/TwitchPlayerContainer';
import TwitchChatContainer from 'twitch/chat/TwitchChatContainer';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  gridPlayer: {
    width: '100%',
  },
  gridChat: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '335px',
    },
  },
  gridHideChat: {
    display: 'none',
  },
  playerWrapperOutside: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 0,
      overflow: 'hidden',
      paddingTop: '56.25%',
      position: 'relative',
    },
  },
  playerWrapperInside: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
}));

const TwitchView = ({ showTwitch, showChat }) => {
  const styles = useStyles();

  return (
    <>
      {showTwitch ? (
        <Grid container className={styles.gridContainer}>
          <Grid sm item className={styles.gridPlayer}>
            <div className={styles.playerWrapperOutside}>
              <div className={styles.playerWrapperInside}>
                <TwitchPlayerContainer />
              </div>
            </div>
          </Grid>
          <Grid sm item className={showChat ? styles.gridChat : styles.gridHideChat}>
            <TwitchChatContainer />
          </Grid>
        </Grid>
      ) : (
        null
      )}
      <TwitchLogicContainer />
    </>
  );
};

TwitchView.defaultProps = {
  showChat: true,
  showTwitch: false,
};

TwitchView.propTypes = {
  showChat: PropTypes.bool,
  showTwitch: PropTypes.bool,
};

export default TwitchView;
