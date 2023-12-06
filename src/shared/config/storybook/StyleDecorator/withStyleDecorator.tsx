import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'

export const withStyleDecorator: Decorator = (Story) => {
  return (
    <div>
      <Story />
    </div>
  )
}
