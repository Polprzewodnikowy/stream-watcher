import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderContainer } from 'shared/header';
import { TitleContainer } from 'shared/title';
import { SidebarContainer } from 'shared/sidebar';
import ChannelListContainer from 'shared/channelList/ChannelListContainer';
import ActionButtonsContainer from './actionButtons/ActionButtonsContainer';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
});

const Layout = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <HeaderContainer>
        <TitleContainer showFullTitle />
        <ActionButtonsContainer />
      </HeaderContainer>
      {children}
      <SidebarContainer>
        <ChannelListContainer />
      </SidebarContainer>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
