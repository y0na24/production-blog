import { LoginSchema } from '../types/loginState'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123'
    }

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('123123'))
    ).toStrictEqual({ username: '123123' })
  })

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: 'dummy'
    }

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('dummy123'))
    ).toStrictEqual({ password: 'dummy123' })
  })

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: 'dummy'
    }

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('dummy123'))
    ).toStrictEqual({ password: 'dummy123' })
  })
})
