import { useState } from "react";
import "./style.css";

const ExchangeForm = ({ currency, rate }) => {
  const [inputValue, setInput]=useState(0);
  const inputCurrency = currency.find((curr) => curr.input).short
  const outputCurrency = currency.find((curr) => curr.output).short

  return (
    <div className="exchangeForm__exchange">
      <form>
        <label>
          Kwota do przeliczenia:
          <br />
          <input type="number" className="exchangeForm__input" min="0" value={inputValue} onChange={({target})=>setInput(inputValue=>inputValue=target.value)}/>
        </label>
        <span className="exchangeForm__currencySymbol">
          {inputCurrency}
        </span>
        <br />
        ⬇
        <br />
        <label>
          <input type="number" className="exchangeForm__input" disabled value={(rate*inputValue).toFixed(2)} />
        </label>
        <span className="exchangeForm__currencySymbol">
          {outputCurrency}
        </span>
      </form>
    </div>
  );
};

export default ExchangeForm;
