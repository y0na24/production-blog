import { render } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button component', () => {
  test('Test render', () => {
    const { getByText } = render(<Button>TEST</Button>)
    expect(getByText('TEST')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    const { getByText } = render(
      <Button theme={ButtonTheme.CLEAR}>TEST</Button>
    )
    expect(getByText('TEST')).toHaveClass('clear')
  })
})
