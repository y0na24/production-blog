import { LoginState } from '../../types/loginState'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('password return', () => {
    const state: DeepPartial<RootState> = {
      loginForm: { password: '123' } as LoginState
    }

    expect(getLoginPassword(state as RootState)).toBe('123')
  })

  test('with empty state', () => {
    const state: DeepPartial<RootState> = {}

    expect(getLoginPassword(state as RootState)).toBe('')
  })
})
