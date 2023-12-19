import { LoginSchema } from '../../types/loginState'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  test('isLoading return', () => {
    const state: DeepPartial<RootState> = {
      loginForm: { isLoading: true } as LoginSchema
    }

    expect(getLoginIsLoading(state as RootState)).toBe(true)
  })

  test('with empty state', () => {
    const state: DeepPartial<RootState> = {}

    expect(getLoginIsLoading(state as RootState)).toBe(false)
  })
})
