import {
  type ReactNode,
  type FC,
  type MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react'
import s from './Modal.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const handleClose = useCallback((): void => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (onClose) {
          onClose()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        window.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [isOpen, onKeyDown])

  const handleContentClick = (e: MouseEvent): void => {
    e.stopPropagation()
  }

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(s.Modal, mods, [className, theme])}>
        <div className={s.overlay} onClick={handleClose}>
          <div className={s.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
