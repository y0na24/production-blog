import { createSelector } from 'reselect'
import { getCounter } from '../getCounter/getCounter'
import { CounterState } from '../../types/counterState'

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterState) => counter.value
)
