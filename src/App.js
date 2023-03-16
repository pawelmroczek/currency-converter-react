import { useEffect, useState } from "react";
import Header from "./Header";
import CurrencyForm from "./CurrencyForm";
import Select from "./Select";
import RateLabel from "./RateLabel";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";
import { useAPI } from "./useAPI";
import { Clock } from "./Clock";
import { useCurrency } from "./useCurrency";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import currencyTable from "./currency";

function App() {
  
  const {currencyTable, problem,loaded}=useAPI();

  console.log(problem);
  console.log(loaded);

  const {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  } = useCurrency(currencyTable);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <CurrencyForm>
          <Select
            header="Waluta wejściowa:"
            actuall={inputCurrency}
            currencyTable={currencyTable}
            onSelectChange={onInputChange}
          />
          <Select
            header="Waluta wyjściowa:"
            currencyTable={currencyTable}
            onSelectChange={onOutputChange}
            actuall={outputCurrency}
          />
          <RateLabel rate={calculateRate()} />
        </CurrencyForm>
        <ExchangeForm
          time={<Clock />}
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          rate={calculateRate()}
        />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
