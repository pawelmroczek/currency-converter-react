import { useState } from "react";
import "./style.css";

const ExchangeForm = ({ currency, rate }) => {
  const [inputValue,setInput]=useState(0);

  return (
    <div className="form__exchange">
      <form>
        <label>
          Kwota do przeliczenia:
          <br />
          <input type="number" className="form__input" min="0" value={inputValue} onChange={({target})=>setInput(inputValue=>inputValue=target.value)}/>
        </label>
        <span className="form__currencySymbol">
          {currency.find((curr) => curr.input).short}
        </span>
        <br />
        ⬇
        <br />
        <label>
          <input type="number" className="form__input" disabled value={rate*inputValue} />
        </label>
        <span className="form__currencySymbol">
          {currency.find((curr) => curr.output).short}
        </span>
      </form>
    </div>
  );
};

export default ExchangeForm;
