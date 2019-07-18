import React from 'react';
import CloseStreamButtonContainer from './CloseStreamButtonContainer';
import ChangeViewButtonContainer from './ChangeViewButtonContainer';
import ToggleChatButtonContainer from './ToggleChatButtonContainer';
import AuthenticationButtonContainer from './AuthenticationButtonContainer';

const HeaderButtons = () => (
  <>
    <CloseStreamButtonContainer />
    <ChangeViewButtonContainer />
    <ToggleChatButtonContainer />
    <AuthenticationButtonContainer />
  </>
);

export default HeaderButtons;
