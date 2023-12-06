import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const withThemeDecorator = (theme: Theme): Decorator => {
  return (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
}
