import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  chat: {
    display: 'flex'
  },
});

export default function TwitchChat({ channel }) {
  const style = useStyles();

  return (
    <iframe
      className={style.chat}
      title='twitch-chat'
      frameborder='0'
      src={`https://www.twitch.tv/embed/${channel.name}/chat?darkpopout`}
    />
  );
}
