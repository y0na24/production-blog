import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserState } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage'

const authData =
  JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string) || undefined

const initialState: UserState = {
  authData
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    logOut: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { reducer: userReducer, actions: userActions } = userSlice
