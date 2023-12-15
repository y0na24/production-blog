import { type Store, configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

export function createReduxStore(initialState?: RootState): Store {
  return configureStore<RootState>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
