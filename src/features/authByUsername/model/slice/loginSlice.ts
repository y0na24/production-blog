import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginState } from '../types/loginState'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginState = {
  isLoading: false,
  username: '',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: loginReducer, actions: loginActions } = loginSlice