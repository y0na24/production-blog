import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import s from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'

export const LoginForm: FC = () => {
  const { t } = useTranslation()

  return (
    <form className={classNames(s.LoginForm)}>
      <Input
        type="text"
        autoFocus={true}
        placeholder={t('Введите username')}
        className={s.input}
      />
      <Input
        type="text"
        placeholder={t('Введите пароль')}
        className={s.input}
      />
      <Button className={s.loginBtn}>{t('Войти')}</Button>
    </form>
  )
}
