
import { useState} from "react";
import currencies from "./currencies";
export const useGetResult = () => {



    const [result, setResult] = useState();

    const [showResult, setShowResult] = useState(false);
  
    const showOnClick = () => {
      setShowResult(true);
    };
  
    const calculateResult = (inputCurrency, outputCurrency, amount) => {
      const rateInput = currencies
        .find(({ code }) => code === inputCurrency)
        .rate;
  
      const rateOutput = currencies
        .find(({ code }) => code === outputCurrency)
        .rate;
  
      setResult({
        inputAmount: +amount,
        inputCurrency,
        outputAmount: amount * rateInput / rateOutput,
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