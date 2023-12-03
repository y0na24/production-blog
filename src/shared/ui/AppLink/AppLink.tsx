import { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import s from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({ className, children, theme, to, ...props }) => {
  return (
    <Link to={to} className={classNames(s.AppLink, {}, [className, s[theme!]])} {...props}>
      {children}
    </Link>
  )
}
