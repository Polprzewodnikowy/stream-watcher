import PropTypes from 'prop-types';
import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

const Sidebar = ({ children, isOpen, setOpen }) => (
  <SwipeableDrawer
    disableBackdropTransition
    open={isOpen}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    ModalProps={{ keepMounted: true }}
  >
    {children}
  </SwipeableDrawer>
);

Sidebar.defaultProps = {
  children: null,
};

Sidebar.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
