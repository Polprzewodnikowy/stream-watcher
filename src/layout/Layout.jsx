import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderContainer } from 'header';
import { TitleContainer } from 'title';
import { HeaderButtons } from 'headerButtons';
import { SidebarContainer } from 'sidebar';
import { ChannelListContainer } from 'channelList';
import { LoaderContainer } from 'loader';

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
        <HeaderButtons />
      </HeaderContainer>
      {children}
      <SidebarContainer>
        <HeaderContainer>
          <TitleContainer />
        </HeaderContainer>
        <ChannelListContainer />
      </SidebarContainer>
      <LoaderContainer />
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
