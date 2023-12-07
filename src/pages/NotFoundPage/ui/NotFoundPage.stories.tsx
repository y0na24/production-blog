import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
