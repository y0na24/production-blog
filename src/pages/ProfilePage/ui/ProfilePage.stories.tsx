import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { withStoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [withStoreDecorator({})]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [withThemeDecorator(Theme.DARK)]
}
