import { ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<RootState>> = {
  loginForm: loginReducer
}

export const withStoreDecorator = (
  initialState: DeepPartial<RootState>,
  asyncReducers?: DeepPartial<ReducersMapObject<RootState>>
): Decorator => {
  return (Story) => (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  )
}
