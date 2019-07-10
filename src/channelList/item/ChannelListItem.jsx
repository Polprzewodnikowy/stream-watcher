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
import { twitchUtils } from 'twitch';

const useStyles = makeStyles({
  dimAvatar: {
    filter: 'grayscale(100%) brightness(50%)',
  },
});

const getIcon = (type) => {
  if (twitchUtils.isStreamLive(type)) {
    return '🔴';
  }
  if (twitchUtils.isStreamRerun(type)) {
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
  const avatarClassName = !twitchUtils.isStreamLiveOrRerun(type) ? styles.dimAvatar : '';
  const gameText = twitchUtils.isStreamLiveOrRerun(type) && gameTitle;
  const viewersText = twitchUtils.isStreamLiveOrRerun(type) && viewers >= 0 && ` ${getIcon(type)} ${viewers}`;

  return (
    <ListItem
      button
      selected={isSelected}
      onClick={() => changeChannel(login)}
    >
      <Grid container alignItems="center" wrap="nowrap">
        <Grid item>
          <ListItemAvatar>
            <Avatar className={avatarClassName} src={avatarUrl} />
          </ListItemAvatar>
        </Grid>
        <Grid container direction="column" wrap="nowrap">
          <Grid item zeroMinWidth>
            <Typography variant="body2" noWrap>{name}</Typography>
          </Grid>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid item zeroMinWidth>
              <Typography variant="body2" color="textSecondary" noWrap>{gameText}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" noWrap>{viewersText}</Typography>
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
