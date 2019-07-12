import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { twitchTypes } from 'twitch';
import { ChannelListItemContainer } from './item';

const useStyles = makeStyles({
  list: {
    width: '400px',
    maxWidth: '400px',
  },
});

const ChannelList = ({ channels, selectedChannel }) => {
  const styles = useStyles();

  return (
    <List className={styles.list} dense>
      {channels.map(({ login, ...props }) => (
        <ChannelListItemContainer
          key={login}
          login={login}
          isSelected={login === selectedChannel}
          {...props}
        />
      ))}
    </List>
  );
};

ChannelList.defaultProps = {
  selectedChannel: null,
};

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape(twitchTypes.channel)).isRequired,
  selectedChannel: PropTypes.string,
};

export default ChannelList;
