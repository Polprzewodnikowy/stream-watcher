import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TwitchPlayerContainer } from '../player';
import { TwitchChatContainer } from '../chat';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexFlow: 'row',
    '@media screen and (orientation:portrait)': {
      flexFlow: 'column',
    },
  },
  playerContainer: {
    flexGrow: 1,
    '@media screen and (orientation:portrait)': {
      flexGrow: 0,
      position: 'relative',
      paddingTop: 'calc(100% / (16/9))',
      '& div': {
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
  },
  chatContainer: {
    minWidth: '335px',
    flexGrow: 0,
    '@media screen and (orientation:portrait)': {
      flexGrow: 1,
    },
  },
}));

const PlayerWithChat = ({ isVisible, showChat }) => {
  const styles = useStyles();

  return isVisible && (
    <div className={styles.container}>
      <div className={styles.playerContainer}>
        <TwitchPlayerContainer />
      </div>
      {showChat && (
        <div className={styles.chatContainer}>
          <TwitchChatContainer />
        </div>
      )}
    </div>
  );
};

PlayerWithChat.defaultProps = {
  isVisible: false,
  showChat: true,
};

PlayerWithChat.propTypes = {
  isVisible: PropTypes.bool,
  showChat: PropTypes.bool,
};

export default PlayerWithChat;
