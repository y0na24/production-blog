import { useState, type FC, useCallback } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import s from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { t } from 'i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)

  const handleToggleModal = useCallback((): void => {
    setAuthModalOpen((prev) => !prev)
  }, [])

  return (
    <header className={classNames(s.Navbar, {}, [className])}>
      <Button
        onClick={handleToggleModal}
        className={s.links}
        theme={ButtonTheme.ClEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={handleToggleModal}>
        {/* eslint-disable*/}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        assumenda sequi optio culpa tenetur enim nesciunt sint est esse
        voluptate incidunt provident velit sed aperiam veritatis ipsam
        cupiditate autem minima!
      </Modal>
    </header>
  )
}
