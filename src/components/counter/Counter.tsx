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

  const counterDataForm = {
    onInputChangeHandler,
    onSetBtnHandler,
    isSetBtnDisabled,
    startValue,
    endValue,
    isError,
  }

  const counterDisplay = {
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
    <CounterDataForm {...counterDataForm} />
  ) : (
    <CounterDisplay {...counterDisplay} />
  )
  return <S.StyledCounter>{contentMainPage}</S.StyledCounter>
}
