import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...props }) => {
  return (
    <button className={classNames(s.Button, {}, [className, s[theme]])} {...props}>
      {children}
    </button>
  )
}
