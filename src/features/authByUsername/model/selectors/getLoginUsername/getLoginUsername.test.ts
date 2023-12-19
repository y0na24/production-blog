import { LoginSchema } from '../../types/loginState'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('password return', () => {
    const state: DeepPartial<RootState> = {
      loginForm: { username: 'y0na24' } as LoginSchema
    }

    expect(getLoginUsername(state as RootState)).toBe('y0na24')
  })

  test('with empty state', () => {
    const state: DeepPartial<RootState> = {}

    expect(getLoginUsername(state as RootState)).toBe('')
  })
})
