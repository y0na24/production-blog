import { FC } from 'react'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <header className={classNames(s.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <nav className={s.links}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </nav>
    </header>
  )
}
