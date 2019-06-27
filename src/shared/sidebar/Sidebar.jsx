import PropTypes from 'prop-types';
import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { HeaderContainer } from 'shared/header';
import { TitleContainer } from 'shared/title';

const Sidebar = ({ children, isOpen, setOpen }) => (
  <SwipeableDrawer
    disableBackdropTransition
    open={isOpen}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    ModalProps={{ keepMounted: true }}
  >
    <HeaderContainer>
      <TitleContainer />
    </HeaderContainer>
    {children}
  </SwipeableDrawer>
);

Sidebar.defaultProps = {
  children: null,
};

Sidebar.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
