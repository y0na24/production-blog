import { type FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
      <button data-testid="sidebar-toggle" onClick={onToggle}>{t('Переключить')}</button>
      <div className={s.switchers}>
        <ThemeSwitcher className={s.themeSwitcher} />
        <LangSwitcher />
      </div>
    </div>
  )
}
