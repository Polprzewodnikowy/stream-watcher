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

const TwitchPlayer = ({ channel, targetID, video }) => {
  const [player, setPlayer] = useState(null);
  const classes = useStyles();

  const initPlayer = useCallback(async () => {
    await loadTwitchPlayer();
    if (!player) {
      setPlayer(new window.Twitch.Player(targetID, { video, channel }));
    }
  }, [targetID, player, video, channel]);

  useEffect(() => {
    initPlayer();
  }, [initPlayer]);

  useEffect(() => {
    if (player) {
      if (video) {
        player.setVideo(video);
      } else if (channel) {
        player.setChannel(channel);
      } else {
        player.pause();
      }
    }
  }, [player, video, channel]);

  return (
    <div id={targetID} className={classes.player} />
  );
};

TwitchPlayer.defaultProps = {
  channel: null,
  targetID: 'twitch-player',
  video: null,
};

TwitchPlayer.propTypes = {
  channel: PropTypes.string,
  targetID: PropTypes.string,
  video: PropTypes.string,
};

export default TwitchPlayer;
