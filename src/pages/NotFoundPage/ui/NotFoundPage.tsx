import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={classNames(s.NotFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </div>
  )
}
