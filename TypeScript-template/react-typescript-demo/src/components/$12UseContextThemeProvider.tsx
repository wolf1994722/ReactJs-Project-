import React, { createContext } from 'react'

type UseContextThemeProviderProps = {
  children:  React.ReactNode
}
const Theme = {
  primary : {
    background : '#06a',
    color : '#ae3'
  },
  secondary : {
    background : '#78a',
    color : '#1e3',
  }
}

export const ThemeContext = createContext(Theme)

function UseContextThemeProvider({children} : UseContextThemeProviderProps) {
  return (
    <>
    <ThemeContext.Provider value={Theme}>
      {children}
    </ThemeContext.Provider>
    </>
  )
}

export default UseContextThemeProvider