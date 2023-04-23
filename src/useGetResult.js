import { useState } from "react";
import { useDataRates } from "./useDataRates";

export const useGetResult = () => {

    const [result, setResult] = useState();
    const dataRates = useDataRates();

    const [showResult, setShowResult] = useState(false);

    const showOnClick = () => {
        setShowResult(true);
    };

    const calculateResult = (inputCurrency, outputCurrency, amount) => {

        const rate = ((dataRates.rates[outputCurrency]) / dataRates.rates[inputCurrency]);

        setResult({
            inputAmount: +amount,
            inputCurrency,
            outputAmount: amount * rate,
            outputCurrency,
        });
    };

    return {
        result,
        showResult,
        showOnClick,
        calculateResult,
        setResult,
    };

};