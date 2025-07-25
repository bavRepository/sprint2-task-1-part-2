import { S } from './Counter_Styles.ts'
import { useCounterStorage } from '../../hooks/useCounterStorage.tsx'
import { CounterDataForm } from './counterDataForm/CounterDataForm.tsx'
import { CounterDisplay } from './counterDisplay/CounterDisplay.tsx'

export const Counter = () => {
  // IMPORT COUNTER & CONTROLLER DATA FROM CUSTOM HOOK
  const {
    startValue,
    endValue,
    count,
    isEdit,
    onIncBtnHandler,
    onInputChangeHandler,
    onSetBtnHandler,
    isSetBtnDisabled,
    onResetBtnHandler,
    isError,
    isLimit,
    contentCounter,
  } = useCounterStorage()

  ////////////////  COUNTER & CONTROLLER PROPS  //////////////////////
  /////

  const ControllerPropsObj = {
    onInputChangeHandler,
    onSetBtnHandler,
    isSetBtnDisabled,
    startValue,
    endValue,
  }

  const CounterPropsObj = {
    onSetBtnHandler,
    isSetBtnDisabled,
    endValue,
    startValue,
    count,
    isEdit,
    isError,
    isLimit,
    contentCounter,
    onIncBtnHandler,
    onResetBtnHandler,
  }

  const contentMainPage = isEdit ? (
    <CounterDataForm {...ControllerPropsObj} />
  ) : (
    <CounterDisplay {...CounterPropsObj} />
  )
  return <S.StyledCounter>{contentMainPage}</S.StyledCounter>
}
