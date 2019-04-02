import React, { useContext } from 'react'
import { Avatar } from '@material-ui/core'
import { Chat, ChatOutlined, Close, Person } from '@material-ui/icons'
import { AppContext } from '../context/AppContext'
import { TwitchContext } from '../context/TwitchContext'
import Action from './Action'

export default function Actions() {
  const { showChat, setShowChat } = useContext(AppContext)
  const { userInfo, setSelectedStream, login, logout } = useContext(TwitchContext)
  
  return (
    <>
      <Action icon title="Toggle chat" onClick={() => setShowChat(!showChat)}>
        {showChat ? <Chat /> : <ChatOutlined />}
      </Action>
      <Action icon title="Close stream" onClick={() => setSelectedStream(null)}>
        <Close />
      </Action>
      {!userInfo &&
      <Action icon title="Login" onClick={() => login()}>
        <Person />
      </Action>}
      {userInfo &&
      <Action title="Logout" onClick={() => logout()}>
        <Avatar src={userInfo.profile_image_url} />
      </Action>}
    </>
  )
}
