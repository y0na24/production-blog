import { memo } from 'react'
import s from './SidebarItem.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { ISidebarItem } from '../model/items'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  return (
    <AppLink
      className={classNames(s.link, {
        [s.collapsed]: collapsed
      })}
      to={item?.path}
    >
      <item.Icon className={s.icon} />
      <span className={s.text}>{t(item?.text)}</span>
    </AppLink>
  )
})
