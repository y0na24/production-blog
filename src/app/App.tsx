import { FC } from 'react'
import { Link } from 'react-router-dom'

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
    </div>
  )
}
