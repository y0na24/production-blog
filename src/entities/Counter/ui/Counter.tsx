import { useAppDispatch, useAppSelector } from 'shared/model/hooks'
import { type FC } from 'react'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter: FC = () => {
  const dispatch = useAppDispatch()
  const counterValue = useAppSelector(getCounterValue)
  const { t } = useTranslation()

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        {t('increment')}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t('decrement')}
      </Button>
    </>
  )
}
