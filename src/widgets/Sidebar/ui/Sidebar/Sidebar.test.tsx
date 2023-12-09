import { fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderComponent } from 'shared/lib/tests/renderComponent'

describe('Sidebar component', () => {
  test('Test render', () => {
    const { getByTestId } = renderComponent(<Sidebar />)
    expect(getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    const { getByTestId } = renderComponent(<Sidebar />)
    const toggleBtn = getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
