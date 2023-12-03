import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { Loader } from 'shared/ui/Loader'

export const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <div className="page-wrapper">
              <Suspense fallback={<Loader />}>{element}</Suspense>
            </div>
          }
        />
      ))}
    </Routes>
  )
}
