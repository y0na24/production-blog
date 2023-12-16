import { FormEvent, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import s from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'
import { useAppDispatch, useAppSelector } from 'shared/model/hooks'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from 'features/authByUsername/model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { UnknownAction } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text'

export const LoginForm: FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, isLoading, error } = useAppSelector(getLoginState)

  const handleUsernameChange = (value: string): void => {
    dispatch(loginActions.setUsername(value))
  }

  const handlePasswordChange = (value: string): void => {
    dispatch(loginActions.setPassword(value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    dispatch(
      loginByUsername({ username, password }) as unknown as UnknownAction
    )
  }

  return (
    <form className={classNames(s.LoginForm)} onSubmit={handleSubmit}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        autoFocus={true}
        placeholder={t('Введите username')}
        className={s.input}
        onChange={handleUsernameChange}
        value={username}
      />
      <Input
        type="text"
        placeholder={t('Введите пароль')}
        className={s.input}
        onChange={handlePasswordChange}
        value={password}
      />
      <Button
        type="submit"
        theme={ButtonTheme.OUTLINE}
        className={s.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </form>
  )
}
