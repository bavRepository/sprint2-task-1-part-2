import { S } from './Counter_Styles.ts'
import { ControllerForm } from './controllerForm/ControllerForm.tsx'
import { CounterDisplay } from './counterDisplay/CounterDisplay.tsx'
import { useAppSelector } from '../../common/hooks/useAppSelector.ts'
import { counterSelector } from '../../model/counter-selector.ts'

export const Counter = () => {
  const counter = useAppSelector(counterSelector)
  const contentMainPage = counter.isEdit ? (
    <ControllerForm />
  ) : (
    <CounterDisplay />
  )
  return <S.StyledCounter>{contentMainPage}</S.StyledCounter>
}
