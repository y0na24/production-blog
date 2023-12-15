import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../types/user'

const initialState: UserState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const { reducer: userReducer, actions: userActions } = userSlice
