import { fireEvent } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar component', () => {
  test('Test render', () => {
    const { getByTestId } = renderWithTranslation(<Sidebar />)
    expect(getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    const { getByTestId } = renderWithTranslation(<Sidebar />)
    const toggleBtn = getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
