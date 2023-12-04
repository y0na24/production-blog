/* eslint-disable */
import { useEffect, type FC, useState } from 'react'
import { Button } from 'shared/ui/Button'

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false)
  const toggle = (): void => {
    setError(true)
  }

  useEffect(() => {
    if (!error) return

    throw new Error()
  }, [error])

  return <Button onClick={toggle}>throw error</Button>
}
