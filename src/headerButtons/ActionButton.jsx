import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, ButtonBase, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  buttonBase: {
    padding: '4px',
  },
});

const ActionButton = ({
  children,
  icon,
  onClick,
  tooltip,
}) => {
  const styles = useStyles();

  return (
    <Tooltip title={tooltip}>
      {icon ? (
        <IconButton onClick={onClick}>
          {children}
        </IconButton>
      ) : (
        <ButtonBase className={styles.buttonBase} onClick={onClick}>
          {children}
        </ButtonBase>
      )}
    </Tooltip>
  );
};

ActionButton.defaultProps = {
  icon: false,
  tooltip: '',
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
};

export default React.memo(ActionButton);
