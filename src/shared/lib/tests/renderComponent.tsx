import { type RenderResult, render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export interface renderComponentOptions {
  route?: string
  initialState?: DeepPartial<RootState>
}

export const renderComponent = (
  component: ReactNode,
  options: renderComponentOptions = {}
): RenderResult => {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
