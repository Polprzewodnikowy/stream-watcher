import PropTypes from 'prop-types';
import React from 'react';
import {
  makeStyles,
  Typography,
  Slide,
  Snackbar,
  SnackbarContent,
  IconButton,
} from '@material-ui/core';
import { messages } from 'shared';
import { Error, Close, Refresh } from '@material-ui/icons';

const { unknownErrorType, unknownErrorMessage } = messages.en.errors;

const useStyles = makeStyles(theme => ({
  error: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    marginRight: theme.spacing(1.5),
  },
}));

const TwitchErrorModal = ({
  error,
  isModalVisible,
  onClose,
  onRefresh,
}) => {
  const styles = useStyles();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={props => <Slide {...props} direction="down" />}
      open={isModalVisible}
      onClose={onClose}
    >
      <SnackbarContent
        className={styles.error}
        message={(
          <div className={styles.message}>
            <Error className={styles.icon} />
            <div>
              <Typography variant="body1">{(error && error.errorType) || unknownErrorType}</Typography>
              <Typography variant="body2">{(error && error.message) || unknownErrorMessage}</Typography>
            </div>
          </div>
        )}
        action={[
          <IconButton key="refresh" color="inherit" onClick={onRefresh}>
            <Refresh />
          </IconButton>,
          <IconButton key="close" color="inherit" onClick={onClose}>
            <Close />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

TwitchErrorModal.defaultProps = {
  error: null,
};

TwitchErrorModal.propTypes = {
  error: PropTypes.shape({
    errorType: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  isModalVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default TwitchErrorModal;
