import { type FC } from 'react'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <header className={classNames(s.Navbar, {}, [className])}>
      <nav className={s.links}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about">{t('О нас')}</AppLink>
      </nav>
    </header>
  )
}
