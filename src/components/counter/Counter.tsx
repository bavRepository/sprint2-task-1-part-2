import {S} from './Counter_Styles.ts';
import {Button} from "../commom/button/Button.ts";

type useStateProps = {
    endValue: number
    startValue: number
    count: number
    isEdit: boolean
    isError: boolean
    isLimit: boolean
    contentCounter: string | number
    onIncBtnHandler:()=>void
    onResetBtnHandler:()=>void
    isSetBtnDisabled: boolean
    onSetBtnHandler:()=>void
}

export const Counter = (props: useStateProps) => {

    const {
        startValue,
        count,
        isEdit,
        onIncBtnHandler,
        onResetBtnHandler,
        isError,
        isLimit,
        isSetBtnDisabled,
        onSetBtnHandler,
        contentCounter
    } = props

    return (
        <S.contentCounterWrapper>
            <S.Display>
                <S.Count $isLimit={isLimit} $isRegularInfo={isEdit && !isError} $isisError={isError}>
                    {contentCounter}
                </S.Count>
            </S.Display>
            <S.ControlMenuWrapper>
                <Button key={'inc'} disabled={isEdit || isLimit} onClick={onIncBtnHandler}>Inc</Button>
                <Button key={'reset'} disabled={isEdit || startValue === count}
                        onClick={onResetBtnHandler}>Reset</Button>
                <Button disabled={isSetBtnDisabled}
                        onClick={onSetBtnHandler}>Set</Button>
            </S.ControlMenuWrapper>
        </S.contentCounterWrapper>
    );
};
