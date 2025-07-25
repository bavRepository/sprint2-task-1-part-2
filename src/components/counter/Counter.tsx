import { S } from './Counter_Styles.ts'
import { useCounterHandler } from '../../hooks/useCounterHandler.tsx'
import { ControllerForm } from './controllerForm/ControllerForm.tsx'
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
  } = useCounterHandler()

  ////////////////  COUNTER & CONTROLLER PROPS  //////////////////////
  /////

  const ControllerFormProps = {
    onInputChangeHandler,
    onSetBtnHandler,
    isSetBtnDisabled,
    startValue,
    endValue,
    isError,
  }

  const counterDisplayProps = {
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
    <ControllerForm {...ControllerFormProps} />
  ) : (
    <CounterDisplay {...counterDisplayProps} />
  )
  return <S.StyledCounter>{contentMainPage}</S.StyledCounter>
}
