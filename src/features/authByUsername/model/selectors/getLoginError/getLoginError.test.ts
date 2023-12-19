import { LoginSchema } from '../../types/loginState'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  test('error return', () => {
    const state: DeepPartial<RootState> = {
      loginForm: { error: 'error' } as LoginSchema
    }

    expect(getLoginError(state as RootState)).toBe('error')
  })

  test('with empty state', () => {
    const state: DeepPartial<RootState> = {}

    expect(getLoginError(state as RootState)).toBe(undefined)
  })
})
