import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderContainer } from 'shared/header';
import { TitleContainer } from 'shared/title';
import { SidebarContainer } from 'shared/sidebar';
import { HeaderButtons } from 'shared/header/buttons';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
});

const Layout = ({ children, sidebar }) => {
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <HeaderContainer>
        <TitleContainer showFullTitle />
        <HeaderButtons />
      </HeaderContainer>
      {children}
      <SidebarContainer>
        {sidebar}
      </SidebarContainer>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
  sidebar: null,
};

Layout.propTypes = {
  children: PropTypes.element,
  sidebar: PropTypes.element,
};

export default Layout;
