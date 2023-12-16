import { type ButtonHTMLAttributes, type FC } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  ClEAR_INVERTED = 'clearInverted',
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
  disabled,
  ...props
}) => {
  const mods: Mods = { [s.square]: square, [s.disabled]: disabled as boolean }

  return (
    <button
      className={classNames(s.Button, mods, [className, s[theme!], s[size]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
