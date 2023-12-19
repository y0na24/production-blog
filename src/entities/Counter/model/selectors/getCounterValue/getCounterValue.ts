import { createSelector } from 'reselect'
import { getCounter } from '../getCounter/getCounter'
import { CounterSchema } from '../../types/counterState'

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
)
