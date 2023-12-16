import { type FC } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY
}) => {
  return (
    <div className={classNames(s.Text, {}, [className, s[theme]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
}
