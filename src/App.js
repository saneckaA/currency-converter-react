import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Result from "./Result";
import Form from "./Form";
import Clock from "./Clock";
import MediaClock from "./MediaClock";
import SwitchTheme from './SwitchTheme';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import { useSwitchTheme } from './useSwitchTheme';
import { useGetResult } from './useGetResult';
import { useDataRates } from './useDataRates';


function App() {

  const [themes, switchTheme] = useSwitchTheme();


  const modeThemes = {
    light: theme.lightTheme,
    dark: theme.darkTheme,
  };

  const {
    result,
    showResult,
    showOnClick,
    calculateResult,
  } = useGetResult();

  const {
    dataRates
  } = useDataRates();

  return (
    <ThemeProvider theme={themes === "light" ? theme.lightTheme : theme.darkTheme}>
      <>
        <GlobalStyle />
        <Container
          showResult={showResult}
          mediaTimeContent={
            <MediaClock />
          }
          buttonContent={
            <SwitchTheme
              switchTheme={switchTheme}
            />
          }
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
            <Clock />
          }
          resultContent={
            <Result
              result={result}
            />
          }
        />
      </>
    </ThemeProvider>
  )
};

export default App;
