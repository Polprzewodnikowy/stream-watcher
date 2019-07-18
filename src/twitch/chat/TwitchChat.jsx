import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { getChatUrl } from '../utils';

const useStyles = makeStyles({
  chat: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

const TwitchChat = ({ channel, title }) => {
  const styles = useStyles();
  const url = getChatUrl(channel);

  return (
    <iframe className={styles.chat} frameBorder="0" src={url} title={title} />
  );
};

TwitchChat.defaultProps = {
  channel: null,
  title: 'twitch-chat',
};

TwitchChat.propTypes = {
  channel: PropTypes.string,
  title: PropTypes.string,
};

export default TwitchChat;
