import { LoginState } from '../types/loginState'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginState> = {
      username: '123'
    }

    expect(
      loginReducer(state as LoginState, loginActions.setUsername('123123'))
    ).toStrictEqual({ username: '123123' })
  })

  test('set password', () => {
    const state: DeepPartial<LoginState> = {
      password: 'dummy'
    }

    expect(
      loginReducer(state as LoginState, loginActions.setPassword('dummy123'))
    ).toStrictEqual({ password: 'dummy123' })
  })

  test('set password', () => {
    const state: DeepPartial<LoginState> = {
      password: 'dummy'
    }

    expect(
      loginReducer(state as LoginState, loginActions.setPassword('dummy123'))
    ).toStrictEqual({ password: 'dummy123' })
  })
})
