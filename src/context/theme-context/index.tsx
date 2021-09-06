import { createContext, FC, useContext, useState } from 'react'
import { DarkTheme, LightTheme } from '@styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { EModes } from '@components/calculator/types'
import { IThemeContextProperties } from './types'

export const Themes = {
  [EModes.Light]: LightTheme,
  [EModes.Dark]: DarkTheme
} as const

const ThemeContext = createContext<IThemeContextProperties | null>(null)

export const ThemeContextProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<any>(Themes['light'])

  const updateThemeMode = (mode: EModes) => {
    setThemeMode(Themes[mode])
  }

  return (
    <ThemeContext.Provider value={{ themeMode, updateThemeMode }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
export const useThemeContext = () => useContext(ThemeContext) as IThemeContextProperties
