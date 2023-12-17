import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type RootState } from '../config/store'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<RootState>
  asyncReducers?: DeepPartial<ReducersMapObject<RootState>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers
}) => {
  const store = createReduxStore(
    initialState as RootState,
    asyncReducers as ReducersMapObject<RootState>
  )

  return <Provider store={store}>{children}</Provider>
}
