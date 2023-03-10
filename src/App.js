import { useEffect, useState } from "react";
import Header from "./Header";
import CurrencyForm from "./CurrencyForm";
import Select from "./Select";
import RateLabel from "./RateLabel";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";
import currencyTable from "./currency";
import { Clock } from "./Clock";

function App() {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  

  const calculateRate = () => {
    const inputRate = currencyTable.find(
      (curr) => curr.short === inputCurrency
    ).toPLN;
    const outputRate = currencyTable.find(
      (curr) => curr.short === outputCurrency
    ).toPLN;

    return (inputRate / outputRate).toFixed(2);
  };

  const changeCurrencyInput = (id) => {
    setInputCurrency(
      (inputCurrency) =>
        (inputCurrency = currencyTable.find((curr) => curr.id == id).short)
    );
  };

  const changeCurrencyOutput = (id) => {
    setOutputCurrency(
      (outputCurrency) =>
        (outputCurrency = currencyTable.find((curr) => curr.id == id).short)
    );
  };

  const onInputChange = ({ target }) => {
    changeCurrencyInput(target.value);
  };

  const onOutputChange = ({ target }) => {
    changeCurrencyOutput(target.value);
  };

  return (
    <>
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
          time={<Clock/>}
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          rate={calculateRate()}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
