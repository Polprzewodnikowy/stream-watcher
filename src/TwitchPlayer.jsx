import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import loadTwitchPlayer from './utils/loadTwitchPlayer';
import './TwitchPlayer.css';

const useStyles = makeStyles({
  player: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

export default function TwitchPlayer({ channel, targetID = 'twitch-player' }) {
  const styles = useStyles();

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    loadTwitchPlayer().then(() => {
      setPlayer(new window.Twitch.Player(targetID, { channel: channel.name }));
    });
  }, [])

  useEffect(() => {
    if (player) {
      player.setChannel(channel.name);
    }
  }, [channel]);

  return (
    <div id={targetID} className={styles.player} />
  );
}
