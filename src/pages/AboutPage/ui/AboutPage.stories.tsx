import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [withThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
