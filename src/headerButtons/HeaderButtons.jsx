import React from 'react';
import CloseStreamButtonContainer from './CloseStreamButtonContainer';
import ToggleChatButtonContainer from './ToggleChatButtonContainer';
import AuthenticationButtonContainer from './AuthenticationButtonContainer';

const HeaderButtons = () => (
  <>
    <CloseStreamButtonContainer />
    <ToggleChatButtonContainer />
    <AuthenticationButtonContainer />
  </>
);

export default HeaderButtons;
