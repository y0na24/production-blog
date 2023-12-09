import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square = false,
  size = ButtonSize.M,
  ...props
}) => {
  return (
    <button
      className={classNames(s.Button, { [s.square]: square }, [
        className,
        s[theme!],
        s[size]
      ])}
      {...props}
    >
      {children}
    </button>
  )
}
