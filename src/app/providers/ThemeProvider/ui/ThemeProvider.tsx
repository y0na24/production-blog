import { useMemo, useState, type FC, type ReactNode } from 'react'
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY
} from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
