import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { withLokiDecorator } from 'shared/config/storybook/LokiDecorator/withLokiDecorator'
import { withRouterDecorator } from 'shared/config/storybook/RouterDecorator'

import { withStyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withStyleDecorator,
    withThemeDecorator(Theme.LIGHT),
    withRouterDecorator,
    withLokiDecorator
  ]
}

export default preview
