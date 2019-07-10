import { connect } from 'react-redux';
import { sidebarActions } from 'sidebar';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(sidebarActions.toggleSidebarState()),
});

export default connect(null, mapDispatchToProps)(Header);
