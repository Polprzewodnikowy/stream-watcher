import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ChannelContainer } from './channel';
import * as twitchTypes from '../types';

const useStyles = makeStyles({
  list: {
    minWidth: '400px',
    maxWidth: '400px',
  },
});

const TwitchChannels = ({ channels, selectedChannel }) => {
  const styles = useStyles();

  return (
    <List className={styles.list} dense>
      {channels.map(channel => (
        <ChannelContainer
          key={channel.userId}
          isSelected={channel.userId === selectedChannel.userId}
          channel={channel}
        />
      ))}
    </List>
  );
};

TwitchChannels.defaultProps = {
  selectedChannel: {},
};

TwitchChannels.propTypes = {
  channels: twitchTypes.channelsType.isRequired,
  selectedChannel: twitchTypes.channelType,
};

export default TwitchChannels;
