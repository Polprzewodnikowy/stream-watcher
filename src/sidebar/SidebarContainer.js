import { connect } from 'react-redux';
import { setSidebarState } from './actions';
import Sidebar from './Sidebar';

const mapStateToProps = ({ sidebar: { isOpen } }) => ({ isOpen });

const mapDispatchToProps = (dispatch) => ({
  setOpen: (state) => dispatch(setSidebarState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
