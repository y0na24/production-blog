import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  }
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlinedSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const BackgroundTheme: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
