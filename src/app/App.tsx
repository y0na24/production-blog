import { FC, Suspense } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

import { classNames } from 'shared/lib/classNames/classNames'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'

export const App: FC = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
