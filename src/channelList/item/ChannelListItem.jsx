import PropTypes from 'prop-types';
import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { twitchUtils, twitchTypes } from 'twitch';

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
    gridTemplateColumns: '1fr auto auto',
  },
  spacer: {
    width: '10px',
  },
});

const ChannelListItem = ({
  avatarUrl,
  gameTitle,
  isSelected,
  login,
  name,
  changeChannel,
  title,
  type,
  viewers,
}) => {
  const styles = useStyles();
  const isActive = twitchUtils.isStreamLiveOrRerun(type);
  const liveIcon = twitchUtils.isStreamLive(type) ? '🔴' : '';
  const rerunIcon = twitchUtils.isStreamRerun(type) ? '🔵' : '';

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
          <div className={styles.spacer} />
          <Typography variant="body2" color="textSecondary" noWrap>
            {isActive && `${liveIcon}${rerunIcon} ${viewers}`}
          </Typography>
        </div>
      </div>
    </ListItem>
  );
};

ChannelListItem.propTypes = {
  ...twitchTypes.channel,
  changeChannel: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ChannelListItem;
