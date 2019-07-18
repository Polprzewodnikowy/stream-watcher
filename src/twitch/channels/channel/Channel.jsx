import PropTypes from 'prop-types';
import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { isStreamLive } from '../../utils';
import * as twitchTypes from '../../types';

const useStyles = makeStyles({
  dimAvatar: {
    filter: 'grayscale(100%) brightness(50%)',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden',
  },
  subtitleContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 10px auto',
  },
});

const Channel = ({ changeChannel, channel, isSelected }) => {
  const styles = useStyles();

  const {
    avatarUrl,
    gameTitle,
    login,
    name,
    title,
    type,
    viewers,
  } = channel;

  const isActive = isStreamLive(type);

  return (
    <ListItem
      button
      selected={isSelected}
      onClick={() => changeChannel(login)}
    >
      <ListItemAvatar>
        <Avatar className={!isActive ? styles.dimAvatar : ''} src={avatarUrl} />
      </ListItemAvatar>
      <div className={styles.container} title={title}>
        <Typography variant="body2" noWrap>{name}</Typography>
        <div className={styles.subtitleContainer}>
          <Typography variant="body2" color="textSecondary" noWrap>{gameTitle}</Typography>
          <div />
          <Typography variant="body2" color="textSecondary" noWrap>
            {isActive && `🔴 ${viewers}`}
          </Typography>
        </div>
      </div>
    </ListItem>
  );
};

Channel.propTypes = {
  changeChannel: PropTypes.func.isRequired,
  channel: twitchTypes.channelType.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Channel;
