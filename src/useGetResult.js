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
        console.log("dataRates.data", dataRates.data);
        if (dataRates.data && dataRates.data[inputCurrency] && dataRates.data[outputCurrency]) {
            const rate = ((dataRates.data[outputCurrency].value) / dataRates.data[inputCurrency].value);
            console.log("rate", rate);

            setResult({
                inputAmount: +amount,
                inputCurrency,
                outputAmount: +amount * rate,
                outputCurrency,
            });
        }
    };

    return {
        result,
        showResult,
        showOnClick,
        calculateResult,
        setResult,
    };

};