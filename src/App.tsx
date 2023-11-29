import { FC, Suspense } from 'react'
import './index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback='Loading...'>
              <MainPageAsync />
            </Suspense>
          }
        />
        <Route path="/about" element={<AboutPageAsync />} />
      </Routes>
    </>
  )
}
