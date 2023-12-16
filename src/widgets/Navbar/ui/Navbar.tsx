import { useState, type FC, useCallback } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { LoginModal } from 'features/authByUsername'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'shared/model/hooks'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const authData = useAppSelector(getUserAuthData)

  const handleCloseModal = useCallback((): void => {
    setAuthModalOpen(false)
  }, [])

  const handleOpenModal = useCallback((): void => {
    setAuthModalOpen(true)
  }, [])

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(s.Navbar, {}, [className])}>
        <Button
          onClick={handleLogOut}
          className={s.links}
          theme={ButtonTheme.ClEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </header>
    )
  }

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
