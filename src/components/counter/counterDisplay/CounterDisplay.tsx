import { S } from '../Counter_Styles.ts'
import { Button } from '../../commom/button/Button.ts'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../../common/hooks/useAppSelector.ts'
import { counterSelector } from '../../../model/counter-selector.ts'
import { useEffect } from 'react'
import { updateLSCounterData } from '../../../common/localStorage/localStorage.ts'
import {
  resetCountToDefaultAC,
  setNewIncrementValueAC,
  setStartValueAC,
} from '../../../model/counter-reducer.ts'
import { getCounterLogicObj } from '../../../common/utils/renderLogicComponents.tsx'

export const CounterDisplay = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(counterSelector)

  const { count, startValue, isEdit } = counter

  useEffect(() => {
    updateLSCounterData(counter)
  }, [count])

  const setNewIncrementValue = () => {
    dispatch(setNewIncrementValueAC())
    updateLSCounterData(counter)
  }

  const resetCountToDefault = () => {
    dispatch(resetCountToDefaultAC())
    updateLSCounterData(counter)
  }

  const setUserValuesOnBtn = () => {
    dispatch(setStartValueAC({ startValue }))
  }

  //Logic
  const { isError, isLimit, content } = getCounterLogicObj(counter)

  return (
    <S.contentWrapper>
      <S.Display>
        <S.Count
          $isLimit={isLimit}
          $isRegularInfo={isEdit && !isError}
          $isisError={isError}
        >
          {content}
        </S.Count>
      </S.Display>
      <S.ControlMenuWrapper>
        <Button
          key={'inc'}
          disabled={isEdit || isLimit}
          onClick={setNewIncrementValue}
        >
          Inc
        </Button>
        <Button
          key={'reset'}
          disabled={isEdit || startValue === count}
          onClick={resetCountToDefault}
        >
          Reset
        </Button>
        <Button disabled={isError} onClick={setUserValuesOnBtn}>
          Set
        </Button>
      </S.ControlMenuWrapper>
    </S.contentWrapper>
  )
}
