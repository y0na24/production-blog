import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { withStoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const LightLoggedIn: Story = {
  decorators: [
    withStoreDecorator({ user: { authData: { username: 'y0na24', id: '1' } } })
  ]
}

export const LightLoggedOut: Story = {
  decorators: [withStoreDecorator({ user: { authData: undefined } })]
}

export const DarkLoggedIn: Story = {
  decorators: [
    withStoreDecorator({ user: { authData: { username: 'y0na24', id: '1' } } }),
    withThemeDecorator(Theme.DARK)
  ]
}

export const DarkLoggedOut: Story = {
  decorators: [
    withThemeDecorator(Theme.DARK),
    withStoreDecorator({ user: { authData: undefined } })
  ]
}
