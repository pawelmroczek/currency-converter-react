import { useState } from "react";
import Header from "./Header";
import CurrencyForm from "./CurrencyForm";
import Select from "./Select";
import RateLabel from "./RateLabel";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";

function App() {
  const [currency, setNewCurrency] = useState([
    {
      id: 0,
      name: "Polski złoty",
      short: "PLN",
      input: true,
      output: false,
      toPLN: 1,
    },
    {
      id: 1,
      name: "Euro",
      short: "EUR",
      input: false,
      output: false,
      toPLN: 4.7085,
    },
    {
      id: 2,
      name: "Dolar amerykański",
      short: "USD",
      input: false,
      output: false,
      toPLN: 4.6254,
    },
    {
      id: 3,
      name: "Frank Szwajcarski",
      short: "CHF",
      input: false,
      output: true,
      toPLN: 4.8101,
    },
  ]);

  const calculateRate = () => {
    const inputRate = currency.find((curr) => curr.input).toPLN;
    const outputRate = currency.find((curr) => curr.output).toPLN;
    return (inputRate / outputRate).toFixed(2);
  };

  let rate = calculateRate();

  const changeCurrencyInput = (id) => {
    setNewCurrency((currency) =>
      currency.map((curr) => {
        if (curr.id == id) {
          return { ...curr, input: true };
        }
        return { ...curr, input: false };
      })
    );
    rate = calculateRate();
  };

  const changeCurrencyOutput = (id) => {
    setNewCurrency((currency) =>
      currency.map((curr) => {
        if (curr.id == id) {
          return { ...curr, output: true };
        }
        return { ...curr, output: false };
      })
    );
    rate = calculateRate();
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
            currency={currency}
            onSelectChange={onInputChange}
            input={true}
          />
          <Select
            header="Waluta wyjściowa:"
            currency={currency}
            onSelectChange={onOutputChange}
            input={false}
          />
          <RateLabel rate={rate} />
        </CurrencyForm>
        <ExchangeForm currency={currency} rate={rate} />
      </main>
      <Footer />
    </>
  );
}

export default App;
