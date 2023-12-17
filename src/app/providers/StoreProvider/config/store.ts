import {
  type Store,
  configureStore,
  ReducersMapObject,
  EnhancedStore
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'
import { ReducerManager, createReducerManager } from './reducerManager'
import { UserState } from 'entities/User/model/types/user'
import { CounterState } from 'entities/Counter/model/types/counterState'
import { LoginState } from 'features/authByUsername/model/types/loginState'

export function createReduxStore(
  initialState?: RootState,
  asyncReducers?: ReducersMapObject<RootState>
): Store {
  const staticReducers: ReducersMapObject<RootState> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(staticReducers)

  const store = configureStore<RootState>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export interface RootState {
  user: UserState
  counter: CounterState
  loginForm?: LoginState
}

export type RootStateKey = keyof RootState

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ReduxStoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager<RootState>
}
