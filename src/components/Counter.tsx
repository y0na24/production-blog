import { FC, useState } from 'react'
import classes from './Counter.module.scss'

interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
