import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  makeStyles,
  Typography,
  Paper,
  Button,
  Modal,
} from '@material-ui/core';
import { messages } from 'shared';
import { clearErrors } from './actions';

const { unknownError, closeModal } = messages.en.errors;

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    width: 500,
    padding: theme.spacing(4),
  },
  row: {
    paddingBottom: theme.spacing(2),
  },
  actions: {
    paddingTop: theme.spacing(2),
    float: 'right',
  },
}));

const ErrorModal = ({ error, isModalVisible, onClose }) => {
  const styles = useStyles();

  return (
    <Modal open={isModalVisible} onClose={onClose}>
      <Paper className={styles.modal}>
        <div className={styles.row}>
          <Typography variant="h5">
            {error ? (
              `${error.status}: ${error.error}`
            ) : (
              unknownError
            )}
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography variant="body1">{error && error.message}</Typography>
        </div>
        <div className={styles.actions}>
          <Button onClick={onClose}>{closeModal}</Button>
        </div>
      </Paper>
    </Modal>
  );
};

ErrorModal.defaultProps = {
  error: null,
};

ErrorModal.propTypes = {
  error: PropTypes.shape({
    error: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }),
  isModalVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = ({ twitch: { errors } }) => {
  const {
    user,
    followed,
    streams,
    games,
  } = errors;

  const firstError = user || followed || streams || games;

  return {
    error: firstError,
    isModalVisible: Boolean(firstError),
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
