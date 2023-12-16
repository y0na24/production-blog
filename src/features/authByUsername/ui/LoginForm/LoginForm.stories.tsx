import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { withStoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    withStoreDecorator({
      loginForm: { username: '123', password: 'randomPass' }
    })
  ]
}

export const withError: Story = {
  decorators: [
    withStoreDecorator({
      loginForm: { username: '123', password: 'randomPass', error: 'ERROR' }
    })
  ]
}

export const withLoading: Story = {
  decorators: [
    withStoreDecorator({
      loginForm: { isLoading: true }
    })
  ]
}
