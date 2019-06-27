import { connect } from 'react-redux';
import { toggleSidebarState } from 'shared/sidebar/actions';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebarState()),
});

export default connect(null, mapDispatchToProps)(Header);
