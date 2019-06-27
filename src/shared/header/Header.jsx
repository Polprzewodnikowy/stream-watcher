import PropTypes from 'prop-types';
import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles({
  appBar: {
    maxWidth: '100vw',
  },
});

const Header = ({ children, toggleSidebar }) => {
  const styles = useStyles();

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar variant="dense">
        <IconButton color="inherit" onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  children: null,
  toggleSidebar: () => {},
};

Header.propTypes = {
  children: PropTypes.element,
  toggleSidebar: PropTypes.func,
};

export default Header;
