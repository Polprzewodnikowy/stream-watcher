import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { messages } from 'shared';
import { twitchActions } from 'twitch';
import ActionButton from './ActionButton';

const { tooltips } = messages.en.actions;

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const AuthenticationButton = ({
  avatarUrl,
  isLoggedIn,
  login,
  logout,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <ActionButton tooltip={tooltips.logout} onClick={logout}>
          <Avatar src={avatarUrl} />
        </ActionButton>
      ) : (
        <ActionButton icon tooltip={tooltips.login} onClick={login}>
          <Person />
        </ActionButton>
      )}
    </div>
  );
};

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
  login: () => dispatch(twitchActions.twitchLogin()),
  logout: () => dispatch(twitchActions.twitchLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationButton);
