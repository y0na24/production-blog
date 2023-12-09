import { type FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

import { useTranslation } from 'react-i18next'
import { RoutesPath } from 'shared/config/routerConfig/routerConfig'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button
        className={s.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        data-testid="sidebar-toggle"
        square={true}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.items}>
        <AppLink className={s.link} to={RoutesPath.main}>
          <AboutIcon className={s.icon} />
          <span>{t('Главная')}</span>
        </AppLink>
        <AppLink className={s.link} to={RoutesPath.about}>
          <MainIcon className={s.icon} />
          <span>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher className={s.themeSwitcher} />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}
