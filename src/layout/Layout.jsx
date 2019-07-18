import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderContainer } from 'shared/header';
import { SidebarContainer } from 'sidebar';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
});

const Layout = ({
  children,
  header,
  sidebar,
  sidebarHeader,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <HeaderContainer>
        {header}
      </HeaderContainer>
      {children}
      <SidebarContainer>
        <HeaderContainer>
          {sidebarHeader}
        </HeaderContainer>
        {sidebar}
      </SidebarContainer>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
  header: null,
  sidebar: null,
  sidebarHeader: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  sidebar: PropTypes.node,
  sidebarHeader: PropTypes.node,
};

export default Layout;
