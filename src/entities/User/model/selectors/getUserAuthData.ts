import { User } from '../types/user'

export const getUserAuthData = (state: RootState): User | undefined =>
  state.user.authData
