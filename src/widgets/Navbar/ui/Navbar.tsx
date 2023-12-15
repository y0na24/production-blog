import { useState, type FC, useCallback } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/authByUsername'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)

  const handleCloseModal = useCallback((): void => {
    setAuthModalOpen(false)
  }, [])

  const handleOpenModal = useCallback((): void => {
    setAuthModalOpen(true)
  }, [])

  return (
    <header className={classNames(s.Navbar, {}, [className])}>
      <Button
        onClick={handleOpenModal}
        className={s.links}
        theme={ButtonTheme.ClEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
    </header>
  )
}
