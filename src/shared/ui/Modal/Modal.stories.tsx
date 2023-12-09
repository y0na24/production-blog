import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. fasdlklfjdsaklfjsdafklsdajfkldsafjdsaklfjdsalkghguir3gth349uggal;fgjkdslaghowiujugtsdljf'
  }
}

export const Dark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. fasdlklfjdsaklfjsdafklsdajfkldsafjdsaklfjdsalkghguir3gth349uggal;fgjkdslaghowiujugtsdljf'
  },
  decorators: [withThemeDecorator(Theme.DARK)]
}
