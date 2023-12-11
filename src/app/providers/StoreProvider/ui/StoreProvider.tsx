import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type RootState } from '../config/store'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<RootState>
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState
}) => {
  const store = createReduxStore(initialState as RootState)

  return <Provider store={store}>{children}</Provider>
}
