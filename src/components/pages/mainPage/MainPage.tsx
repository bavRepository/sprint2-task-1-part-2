import { MainPageStyled } from './MainPage_styles.ts'
import { Counter } from '../../counter/Counter.tsx'

export const MainPage = () => {
  return (
    <MainPageStyled>
      <Counter />
    </MainPageStyled>
  )
}
