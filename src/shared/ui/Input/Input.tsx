import {
  type InputHTMLAttributes,
  type FC,
  type ChangeEvent,
  useState,
  useEffect,
  useRef
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  className,
  autoFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      inputRef?.current?.focus()
    }
  }, [autoFocus])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    onChange?.(value)
    setCaretPosition(value.length)
  }

  const handleFocus = (): void => {
    setIsFocused(true)
  }

  const handleBlur = (): void => {
    setIsFocused(false)
  }

  const handleSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
    <div className={classNames(s.InputWrapper, {}, [className])}>
      {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
      <div className={s.inputWrapper}>
        <input
          className={s.input}
          ref={inputRef}
          onChange={handleChange}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          {...props}
        />
        {isFocused && (
          <span
            className={s.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
}
