import React from 'react';
import CloseStreamButtonContainer from './CloseStreamButtonContainer';
import ToggleChatButtonContainer from './ToggleChatButtonContainer';
import AuthenticationButtonContainer from './AuthenticationButtonContainer';
import RefreshDataButtonContainer from './RefreshDataButtonContainer';

const HeaderButtons = () => (
  <>
    <RefreshDataButtonContainer />
    <CloseStreamButtonContainer />
    <ToggleChatButtonContainer />
    <AuthenticationButtonContainer />
  </>
);

export default HeaderButtons;
