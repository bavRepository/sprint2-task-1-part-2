import { MainPageStyled } from './MainPage_styles.ts'
import { Counter } from '../../counter/Counter.tsx'
import { Container } from '../../commom/Container.ts'

export const MainPage = () => {
  return (
    <MainPageStyled>
      <Container>
        <Counter />
      </Container>
    </MainPageStyled>
  )
}
