import { createContext, FC, useContext, useState } from 'react'
import { DarkTheme, LightTheme } from '@styles/index'
import { ThemeProvider } from '@material-ui/core/styles'

enum EModes {
  Light = 'light',
  Dark = 'dark'
}

const Themes = {
  [EModes.Light]: LightTheme,
  [EModes.Dark]: DarkTheme
} as const

interface IThemeContextProperties {
  themeMode: EModes
  updateThemeMode: (mode: EModes) => void
}

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
