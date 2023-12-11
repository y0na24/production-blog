import { CounterState } from '../../types/counterState'

export const getCounter = (state: RootState): CounterState => state.counter
