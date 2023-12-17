import { FormEvent, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import s from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input'
import { useAppDispatch, useAppSelector } from 'shared/model/hooks'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { UnknownAction } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader'

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useAppSelector(getLoginUsername)
  const password = useAppSelector(getLoginPassword)
  const error = useAppSelector(getLoginError)
  const isLoading = useAppSelector(getLoginIsLoading)

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
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
}

export default LoginForm
