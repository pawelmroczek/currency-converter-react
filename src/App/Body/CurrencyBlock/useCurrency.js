import { useState } from "react";

export const useCurrency = (currencyTable) => {
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const calculateRate = () => {
    const inputRate = currencyTable.find(
      (curr) => curr.short === inputCurrency
    )?.toPLN;
    const outputRate = currencyTable.find(
      (curr) => curr.short === outputCurrency
    )?.toPLN;

    return (outputRate / inputRate).toFixed(2);
  };

  const changeCurrencyInput = (id) => {
    setInputCurrency(
      (inputCurrency) =>
        (inputCurrency = currencyTable.find((curr) => curr.id == id)?.short)
    );
  };

  const changeCurrencyOutput = (id) => {
    setOutputCurrency(
      (outputCurrency) =>
        (outputCurrency = currencyTable.find((curr) => curr.id == id)?.short)
    );
  };

  const onInputChange = ({ target }) => {
    changeCurrencyInput(target.value);
  };

  const onOutputChange = ({ target }) => {
    changeCurrencyOutput(target.value);
  };

  return {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  };
};
