import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [withThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
