import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false)
  const [showChat, setShowChat] = useState(JSON.parse(localStorage.getItem('showchat')))

  const value = {
    openMenu,
    setOpenMenu,
    showChat,
    setShowChat: (value) => {
      setShowChat(value)
      localStorage.setItem('showchat', value)
    },
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
