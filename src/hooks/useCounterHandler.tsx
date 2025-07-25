import { type ChangeEvent, useState } from 'react'

export type onInputChangeHandlerType = (
  e: ChangeEvent<HTMLInputElement>,
) => void

export type counterProps = {
  count: number
  startValue: number
  endValue: number
  isEdit: boolean
}

export const useCounterHandler = () => {
  const [counter, setCounter] = useState<counterProps>({
    count: 0,
    startValue: 0,
    endValue: 5,
    isEdit: false,
  })

  const { count, startValue, endValue, isEdit } = counter

  ////////////////  ControllerForm fn handle  //////////////////////
  /////

  const onInputChangeHandler: onInputChangeHandlerType = (e) => {
    const target = e.currentTarget
    setCounter({ ...counter, [target.id]: Number(target.value) })
  }

  ////////////////  CounterDisplay fn handle  //////////////////////
  /////

  const onIncBtnHandler = () => {
    setCounter((prev) => ({ ...counter, count: prev?.count + 1 }))
  }

  const onResetBtnHandler = () => {
    setCounter({ ...counter, count: counter.startValue })
  }

  ////////////////  ControllerForm & CounterDisplay fn handle  //////////////////////
  /////

  const onSetBtnHandler = () => {
    setCounter({
      ...counter,
      count: counter.startValue,
      isEdit: !counter.isEdit,
    })
  }

  ////////////////  Content 18+  //////////////////////
  /////

  // [Controller logic]
  const isSetBtnDisabled =
    startValue < 0 || endValue < 0 || startValue >= endValue

  // [Counter logic]
  // If Our text ok or isError inside the Counter
  const message = { ok: 'to start click Set', isError: 'invalid value!' }

  // isError & Restriction state
  const isError = startValue >= endValue || startValue < 0 || endValue < 0
  const isLimit = count === endValue

  const contentCounter = isError ? message.isError : isEdit ? message.ok : count

  return {
    onSetBtnHandler,
    onInputChangeHandler,
    onIncBtnHandler,
    onResetBtnHandler,
    isSetBtnDisabled,
    message,
    isError,
    isLimit,
    contentCounter,
    startValue,
    count,
    isEdit,
    endValue,
  }
}
