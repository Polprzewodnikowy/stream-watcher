import PropTypes from 'prop-types';
import React from 'react';
import { Avatar } from '@material-ui/core';
import {
  Chat,
  ChatOutlined,
  Close,
  Person,
} from '@material-ui/icons';
import messages from 'shared/messages';
import ActionButton from './ActionButton';

const { tooltips } = messages.en.actions;

const ActionButtons = ({
  avatarUrl,
  closeStream,
  isLoggedIn,
  login,
  logout,
  showChat,
  toggleChat,
}) => (
  <>
    <ActionButton
      icon
      tooltip={showChat ? tooltips.hideChat : tooltips.showChat}
      onClick={toggleChat}
    >
      {showChat ? <Chat /> : <ChatOutlined />}
    </ActionButton>
    <ActionButton icon tooltip={tooltips.closeStream} onClick={closeStream}>
      <Close />
    </ActionButton>
    {isLoggedIn ? (
      <ActionButton tooltip={tooltips.logout} onClick={logout}>
        <Avatar src={avatarUrl} />
      </ActionButton>
    ) : (
      <ActionButton icon tooltip={tooltips.login} onClick={login}>
        <Person />
      </ActionButton>
    )}
  </>
);

ActionButtons.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  closeStream: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  showChat: PropTypes.bool.isRequired,
  toggleChat: PropTypes.func.isRequired,
};

export default ActionButtons;
