import {MainPageStyled} from './MainPage_styles.ts';
import {Counter} from "../../counter/Counter.tsx";
import {useCounterStorage} from "../../../hooks/useCounterStorage.tsx";
import {Controller} from "../../controller/Controller.tsx";
import {Container} from "../../commom/Container.ts";

export const MainPage = () => {

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
        contentCounter
    } = useCounterStorage()

    ////////////////  COUNTER & CONTROLLER PROPS  //////////////////////
    /////

    const ControllerPropsObj = {
        onInputChangeHandler,
        onSetBtnHandler,
        isSetBtnDisabled,
        startValue,
        endValue
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
        onResetBtnHandler
    }

    const contentMainPage = isEdit ? <Controller {...ControllerPropsObj}/> : <Counter {...CounterPropsObj}/>

    return (
        <MainPageStyled>
            <Container>
                {contentMainPage}
            </Container>
        </MainPageStyled>
    );
};

