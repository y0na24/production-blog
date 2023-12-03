import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={s.loaderWrapper}>
      <div className={classNames(s.ldsEllipsis, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
