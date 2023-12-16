import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'

export const withStoreDecorator = (
  initialState?: DeepPartial<RootState>
): Decorator => {
  return (Story) => (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  )
}
