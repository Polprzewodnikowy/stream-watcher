import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Chat, ChatOutlined } from '@material-ui/icons';
import { toggleShowChatState } from 'twitch/actions';
import { messages } from 'shared';
import ActionButton from './ActionButton';

const { tooltips } = messages.en.actions;

const ToggleChatButton = ({ showChat, toggleChat }) => (
  <ActionButton
    icon
    tooltip={showChat ? tooltips.hideChat : tooltips.showChat}
    onClick={toggleChat}
  >
    {showChat ? <Chat /> : <ChatOutlined />}
  </ActionButton>
);

ToggleChatButton.propTypes = {
  showChat: PropTypes.bool.isRequired,
  toggleChat: PropTypes.func.isRequired,
};

const mapStateToProps = ({ twitch: { showChat } }) => ({ showChat });

const mapDispatchToProps = dispatch => ({
  toggleChat: () => dispatch(toggleShowChatState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleChatButton);
