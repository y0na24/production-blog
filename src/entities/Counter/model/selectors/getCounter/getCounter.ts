import { CounterSchema } from '../../types/counterState'

export const getCounter = (state: RootState): CounterSchema => state.counter
