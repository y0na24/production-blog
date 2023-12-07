import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
