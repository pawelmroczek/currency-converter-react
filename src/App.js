import { useEffect, useState } from "react";
import Header from "./Header";
import CurrencyForm from "./CurrencyForm";
import Select from "./Select";
import RateLabel from "./RateLabel";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";
import currencyTable from "./currency";

function App() {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const [time, newTime] = useState(
    ` ${new Date().toLocaleDateString("pl-PL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })},  ${new Date().toLocaleString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`
  );

  useEffect(() => {
    const clock = setInterval(() => {
      const date=new Date()
      const formatedDate = newTime(
        (time) =>
          (time = ` ${date.toLocaleDateString("pl-PL", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })},  ${date.toLocaleString("pl-PL", {
            hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
          })}`)
      );
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  });

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
          time={time}
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
