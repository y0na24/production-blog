import { FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher className={s.themeSwitcher} />
        <LangSwitcher />
      </div>
    </div>
  )
}
