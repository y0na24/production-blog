import { type FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

import { sidebarItemsList } from '../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

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
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher className={s.themeSwitcher} />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}
