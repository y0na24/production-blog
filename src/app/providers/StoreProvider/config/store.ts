import {
  type Store,
  configureStore,
  ReducersMapObject,
  EnhancedStore
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'
import { ReducerManager, createReducerManager } from './reducerManager'
import { UserSchema } from 'entities/User/model/types/user'
import { CounterSchema } from 'entities/Counter/model/types/counterState'
import { LoginSchema } from 'features/authByUsername/model/types/loginState'
import { ProfileSchema } from 'entities/Profile'

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
  user: UserSchema
  counter: CounterSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type RootStateKey = keyof RootState

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ReduxStoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager<RootState>
}
