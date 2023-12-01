import { FC, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { useTheme } from 'app/providers/ThemeProvider'

import { classNames } from 'shared/lib/classNames/classNames'

import './styles/index.scss'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback="Loading...">
              <AboutPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}
