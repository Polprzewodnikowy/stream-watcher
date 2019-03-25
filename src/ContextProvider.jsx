import React, { createContext, useReducer } from 'react'

export const SET_CHANNEL = 'SET_CHANNEL';
export const SET_USERNAME = 'SET_USERNAME';

const initialState = {
  channel: JSON.parse(localStorage.getItem('channel')),
  username: localStorage.getItem('username') || ''
}

const setTitle = (title) => {
  if (title) {
    document.title = `${title} - Stream Watcher`;
  } else {
    document.title = `Stream Watcher`;
  }
}

setTitle(initialState.channel && initialState.channel.displayName);

function reducer(state, action) {
  switch (action.type) {
    case SET_CHANNEL:
      setTitle(action.payload && action.payload.displayName);
      localStorage.setItem('channel', JSON.stringify(action.payload));
      return { ...state, channel: action.payload };
    case SET_USERNAME:
      localStorage.setItem('username', action.payload);
      return { ...state, username: action.payload };
    default:
      return state;
  }
}

export const Context = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>
}
