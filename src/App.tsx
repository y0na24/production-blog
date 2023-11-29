import { FC } from 'react'
import { Counter } from './components/Counter'
import './index.scss'

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className='app'>
      asdfdsafsadfdsa
      <Counter />
    </div>
  )
}
