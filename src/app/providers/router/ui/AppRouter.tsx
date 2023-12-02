import { FC, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'

export const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
