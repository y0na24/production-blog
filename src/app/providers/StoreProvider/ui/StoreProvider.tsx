import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type RootState } from '../config/store'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const store = createReduxStore(
    initialState as RootState,
    asyncReducers as ReducersMapObject<RootState>,
    navigate
  )

  return <Provider store={store}>{children}</Provider>
}
