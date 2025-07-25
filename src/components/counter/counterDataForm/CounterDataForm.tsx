import { S } from '../Counter_Styles.ts'
import { Button } from '../../commom/button/Button.ts'
import { type ChangeEvent } from 'react'

type ControllerPropsType = {
  onInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onSetBtnHandler: () => void
  isSetBtnDisabled: boolean
  startValue: number
  endValue: number
  isError: boolean
}

export const CounterDataForm = (props: ControllerPropsType) => {
  const {
    onInputChangeHandler,
    onSetBtnHandler,
    isSetBtnDisabled,
    startValue,
    endValue,
    isError,
  } = props

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
            $isEroor={isError}
          />
        </S.InputBlockWrapper>
        <S.InputBlockWrapper key={'startValue'}>
          <label htmlFor={'startValue'}>Start value</label>
          <S.InputCounterData
            type={'number'}
            id={'startValue'}
            onChange={onInputChangeHandler}
            value={startValue}
            $isEroor={isError}
          />
        </S.InputBlockWrapper>
      </S.Display>
      <S.ControlMenuWrapper>
        <Button disabled={isSetBtnDisabled} onClick={onSetBtnHandler}>
          Set
        </Button>
      </S.ControlMenuWrapper>
    </S.contentWrapper>
  )
}
