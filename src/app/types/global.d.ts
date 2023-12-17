declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import type * as React from 'react'

  const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >

  export default ReactComponent
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean

declare type RootState =
  import('app/providers/StoreProvider/config/store').RootState

declare type AppDispatch =
  import('app/providers/StoreProvider/config/store').AppDispatch

declare type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

declare type ReduxStoreWithManager =
  import('app/providers/StoreProvider/config/store').ReduxStoreWithManager
