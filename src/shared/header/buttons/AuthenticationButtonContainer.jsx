import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { twitchLogin, twitchLogout } from 'twitch/actions';
import { messages } from 'shared';
import ActionButton from './ActionButton';

const { tooltips } = messages.en.actions;

const AuthenticationButton = ({
  avatarUrl,
  isLoggedIn,
  login,
  logout,
}) => (
  isLoggedIn ? (
    <ActionButton tooltip={tooltips.logout} onClick={logout}>
      <Avatar src={avatarUrl} />
    </ActionButton>
  ) : (
    <ActionButton icon tooltip={tooltips.login} onClick={login}>
      <Person />
    </ActionButton>
  )
);

AuthenticationButton.defaultProps = {
  avatarUrl: null,
};

AuthenticationButton.propTypes = {
  avatarUrl: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ twitch: { user: { userId, avatarUrl } } }) => ({
  avatarUrl,
  isLoggedIn: Boolean(userId),
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(twitchLogin()),
  logout: () => dispatch(twitchLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationButton);
