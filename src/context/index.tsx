/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, createContext } from 'react'
import { DefaultTheme } from 'styled-components'

import { theme, Themes } from 'theme'

export interface IAppContext {
  theme?: DefaultTheme
  isDark?: boolean
  toggleTheme?: () => void
}

export const AppContext: React.Context<IAppContext> = createContext(
  {} as IAppContext
)

export const useAppContext = (): IAppContext => useContext(AppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <AppContext.Provider
      value={{
        theme: { ...theme, mode: isDark ? Themes.DARK : Themes.LIGHT },
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
