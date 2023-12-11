import { CounterState } from '../types/counterState'
import { counterReducer, counterActions } from './counterSlice'

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterState = {
      value: 10
    }
    expect(counterReducer(state, counterActions.decrement())).toStrictEqual({
      value: 9
    })
  })

  test('increment', () => {
    const state: CounterState = {
      value: 10
    }
    expect(counterReducer(state, counterActions.increment())).toStrictEqual({
      value: 11
    })
  })

  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toStrictEqual(
      {
        value: 1
      }
    )
  })
})
