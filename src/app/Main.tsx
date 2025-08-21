import { MainPageStyled } from './Main_styles.ts'
import { Counter } from '../components/counter/Counter.tsx'

export const Main = () => {
  return (
    <MainPageStyled>
      <Counter />
    </MainPageStyled>
  )
}
