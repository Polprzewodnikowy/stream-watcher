import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { loadTwitchPlayer } from '../utils';

const useStyles = makeStyles({
  player: {
    display: 'flex',
    width: '100%',
    height: '100%',
    '& iframe': {
      width: '100%',
      height: '100%',
    },
  },
});

const TwitchPlayer = ({ channel, targetID }) => {
  const [player, setPlayer] = useState(null);
  const classes = useStyles();

  const initPlayer = useCallback(async () => {
    await loadTwitchPlayer();
    if (!player) {
      setPlayer(new window.Twitch.Player(targetID, { channel }));
    }
  }, [player, targetID, channel]);

  useEffect(() => {
    initPlayer();
  }, [initPlayer]);

  useEffect(() => {
    if (player) {
      player.setChannel(channel);
    }
  }, [channel, player]);

  return (
    <div id={targetID} className={classes.player} />
  );
};

TwitchPlayer.defaultProps = {
  channel: '',
  targetID: 'twitch-player',
};

TwitchPlayer.propTypes = {
  channel: PropTypes.string,
  targetID: PropTypes.string,
};

export default TwitchPlayer;
