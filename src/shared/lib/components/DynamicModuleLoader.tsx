import { Reducer } from '@reduxjs/toolkit'
import { RootStateKey } from 'app/providers/StoreProvider/config/store'
import { type FC, useEffect, ReactNode } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/model/hooks'

export type ReducersList = {
  [key in RootStateKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount
}) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([reducerKey, reducer]: [RootStateKey, Reducer]) => {
        store.reducerManager.add(reducerKey, reducer)
        dispatch({ type: `@INIT ${reducerKey} reducer` })
      }
    )

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((reducerKey: RootStateKey) => {
          store.reducerManager.remove(reducerKey)
          dispatch({ type: `@DESTROY ${reducerKey} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}
