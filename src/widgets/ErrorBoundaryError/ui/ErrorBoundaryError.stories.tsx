import type { Meta, StoryObj } from '@storybook/react'

import { ErrorBoundaryError } from './ErrorBoundaryError'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widgets/ErrorBoundaryError',
  component: ErrorBoundaryError
} satisfies Meta<typeof ErrorBoundaryError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
