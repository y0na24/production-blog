import { type Decorator } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'

export const withThemeDecorator = (theme: Theme): Decorator => {
  return (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
