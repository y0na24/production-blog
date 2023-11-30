import { FC, Suspense, useState } from 'react'
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Theme } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

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
              <MainPageAsync />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback="Loading...">
              <AboutPageAsync />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}
