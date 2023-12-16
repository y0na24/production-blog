import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Random Title',
    text: 'Description Description Description Description'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Random Title',
    text: 'Description Description Description Description'
  },
  decorators: [withThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Random Title'
  },
  decorators: [withThemeDecorator(Theme.DARK)]
}

export const OnlyText: Story = {
  args: {
    text: 'Description Description Description Description'
  }
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description'
  },
  decorators: [withThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
  args: {
    title: 'Random Title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR
  }
}
