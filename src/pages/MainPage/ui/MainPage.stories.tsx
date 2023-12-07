import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [withThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
