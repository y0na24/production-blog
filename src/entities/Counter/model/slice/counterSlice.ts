import { createSlice } from '@reduxjs/toolkit'
import { type CounterState } from '../types/counterState'

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { reducer: counterReducer, actions: counterActions } = counterSlice
