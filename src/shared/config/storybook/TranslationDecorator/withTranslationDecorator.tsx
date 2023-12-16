import { type Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export const withTranslationDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18nForTests}>
      <Story />
    </I18nextProvider>
  )
}
