import { LoginState } from '../types/loginState'

export const getLoginState = (state: RootState): LoginState => state.loginForm
