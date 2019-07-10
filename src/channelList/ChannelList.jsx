import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
  channels: PropTypes.arrayOf(PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    gameTitle: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    viewers: PropTypes.number,
  })).isRequired,
  selectedChannel: PropTypes.string,
};

export default ChannelList;
