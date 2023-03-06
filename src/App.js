import React, { useState } from 'react';
import Container from "./Container";
import Header from './Header';
import Result from './Result';
import Form from './Form';
import currencies from './currencies';
import Clock from './Clock';

function App() {

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

  return (
    <Container
      showResult={showResult}
      formContent={
        <>
          <Header />
          <Form
            calculateResult={calculateResult}
            showOnClick={showOnClick}
          />
        </>
      }
      timeContent={
        <Clock/>
      }
      resultContent={
        <Result
          result={result}
        />
      }
    />
  )
};

export default App;
