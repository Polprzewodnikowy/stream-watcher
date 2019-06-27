import PropTypes from 'prop-types';
import React from 'react';
import {
  Typography,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { isStreamLive, isStreamRerun, isStreamLiveOrRerun } from 'twitch/utils';

const useStyles = makeStyles({
  dimAvatar: {
    filter: 'grayscale(100%) brightness(50%)',
  },
});

const getIcon = (type) => {
  if (isStreamLive(type)) {
    return '🔴';
  }
  if (isStreamRerun(type)) {
    return '🔵';
  }
  return '';
};

const ChannelListItem = ({
  avatarUrl,
  gameTitle,
  isSelected,
  login,
  name,
  changeChannel,
  type,
  viewers,
}) => {
  const styles = useStyles();
  const avatarClassName = !isStreamLiveOrRerun(type) ? styles.dimAvatar : '';
  const gameText = isStreamLiveOrRerun(type) && gameTitle;
  const viewersText = isStreamLiveOrRerun(type) && viewers && `${getIcon(type)} ${viewers}`;

  return (
    <ListItem
      button
      selected={isSelected}
      onClick={() => changeChannel(login)}
    >
      <ListItemAvatar>
        <Avatar className={avatarClassName} src={avatarUrl} />
      </ListItemAvatar>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="body2" noWrap>{name}</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid item>
              <Typography variant="body2" color="textSecondary" noWrap>{gameText}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">{viewersText}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

ChannelListItem.defaultProps = {
  changeChannel: () => {},
  gameTitle: '',
  isSelected: false,
  type: '',
  viewers: null,
};

ChannelListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  changeChannel: PropTypes.func,
  gameTitle: PropTypes.string,
  login: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  viewers: PropTypes.number,
};

export default ChannelListItem;
