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

function App() {
  
  const {currencyTable, problem,date}=useAPI();

  const {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  } = useCurrency(currencyTable);

  if(currencyTable.length){
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
            date={date}
          />
        </main>
        <Footer />
      </ThemeProvider>
    );
  }else if(problem){
    return(
      <div>Chyba nie masz neta</div>
    )
  }
  return(

    <div>Sekundka, ładuje kursy walut z Banku Centralnego</div>
  )

  
}

export default App;
