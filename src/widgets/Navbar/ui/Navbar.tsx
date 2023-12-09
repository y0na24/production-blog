import { type FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <header className={classNames(s.Navbar, {}, [className])}>
      <nav className={s.links}>
        /
      </nav>
    </header>
  )
}
