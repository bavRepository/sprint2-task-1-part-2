import { S } from '../Counter_Styles.ts'
import { Button } from '../../commom/button/Button.ts'
import { type ChangeEvent, useEffect } from 'react'

import { useAppDispatch } from '../../../common/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../../common/hooks/useAppSelector.ts'
import { counterSelector } from '../../../model/counter-selector.ts'
import {
  changeStartEndValuesAC,
  setStartValueAC,
} from '../../../model/counter-reducer.ts'
import { isWrongValues } from '../../../common/utils/renderLogicComponents.tsx'
import { updateLSCounterData } from '../../../common/localStorage/localStorage.ts'

type onInputChangeHandlerType = (e: ChangeEvent<HTMLInputElement>) => void
export const ControllerForm = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(counterSelector)

  const { startValue, endValue } = counter

  useEffect(() => {
    updateLSCounterData(counter)
  }, [startValue, endValue])

  const setUserValuesOnBtn = () => {
    dispatch(setStartValueAC({ startValue }))
  }

  const onInputChangeHandler: onInputChangeHandlerType = (e) => {
    const inputId = e.currentTarget.id,
      newCount = Number(e.currentTarget.value)
    dispatch(changeStartEndValuesAC({ inputId, newCount }))
  }

  // Logic
  const isError = isWrongValues(startValue, endValue)

  return (
    <S.contentWrapper>
      <S.Display>
        <S.InputBlockWrapper key={'endValue'}>
          <label htmlFor={'endValue'}>Max value</label>
          <S.InputCounterData
            type={'number'}
            id={'endValue'}
            onChange={onInputChangeHandler}
            value={endValue}
            $isError={isError}
          />
        </S.InputBlockWrapper>
        <S.InputBlockWrapper key={'startValue'}>
          <label htmlFor={'startValue'}>Start value</label>
          <S.InputCounterData
            type={'number'}
            id={'startValue'}
            onChange={onInputChangeHandler}
            value={startValue}
            $isError={isError}
          />
        </S.InputBlockWrapper>
      </S.Display>
      <S.ControlMenuWrapper>
        <Button disabled={isError} onClick={setUserValuesOnBtn}>
          Set
        </Button>
      </S.ControlMenuWrapper>
    </S.contentWrapper>
  )
}
