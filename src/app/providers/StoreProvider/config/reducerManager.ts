import {
  Reducer,
  ReducersMapObject,
  UnknownAction,
  combineReducers
} from '@reduxjs/toolkit'
import { RootStateKey } from './store'

export interface ReducerManager<S> {
  reduce: (state: S, action: UnknownAction) => S
  getReducerMap: () => ReducersMapObject<S>
  add: <ReducerState>(key: RootStateKey, reducer: Reducer<ReducerState>) => void
  remove: (key: RootStateKey) => void
}

export function createReducerManager(
  initialReducers: ReducersMapObject<RootState>
): ReducerManager<RootState> {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: RootStateKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: RootState, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state as any, action)
    },

    add: (key: RootStateKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: RootStateKey) => {
      if (!key || !reducers[key]) {
        return
      }

      // Remove it from the reducer mapping
      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}

// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer
// }

// export function configureStore(initialState) {
//   const reducerManager = createReducerManager(staticReducers)

//   const store = createStore(reducerManager.reduce, initialState)

//   store.reducerManager = reducerManager
// }
