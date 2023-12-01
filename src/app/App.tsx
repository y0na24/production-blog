import { FC } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

import { classNames } from 'shared/lib/classNames/classNames'

import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  )
}
