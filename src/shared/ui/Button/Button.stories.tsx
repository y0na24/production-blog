import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
