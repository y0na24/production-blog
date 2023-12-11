import { fireEvent } from '@testing-library/react'
import { Counter } from './Counter'
import { renderComponent } from 'shared/lib/tests/renderComponent'

describe('Counter', () => {
  test('render counter value', () => {
    const { getByTestId } = renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    expect(getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    const { getByTestId } = renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    fireEvent.click(getByTestId('increment-btn'))

    expect(getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    const { getByTestId } = renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    fireEvent.click(getByTestId('decrement-btn'))

    expect(getByTestId('value-title')).toHaveTextContent('9')
  })
})
