import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'widgets/AppLink',
  component: AppLink,
  args: {
    to: '/fakePath'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
  }
}
