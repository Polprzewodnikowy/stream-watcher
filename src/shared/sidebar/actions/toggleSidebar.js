import { buildActionCreator } from 'shared';
import { SIDEBAR_SET_STATE } from 'shared/sidebar/actionTypes';

const sidebarSetState = buildActionCreator(SIDEBAR_SET_STATE, 'state');

export const setSidebarState = state => dispatch => dispatch(sidebarSetState(state));

export const toggleSidebarState = () => (dispatch, getState) => {
  const { sidebar: { isOpen } } = getState();

  return dispatch(sidebarSetState(!isOpen));
};
