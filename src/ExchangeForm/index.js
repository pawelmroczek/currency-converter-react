import { useState } from "react";
import "./style.css";

const ExchangeForm = ({ inputCurrency, outputCurrency, rate ,time}) => {
  const [inputValue, setInput] = useState(0);

  return (
    
    <div className="exchangeForm__exchange">
      <div className="exchangeForm__time">Dziś jest{time}</div>
      <form>
        <div>
          {" "}
          <label>
            Kwota do przeliczenia:
            <br />
            <input
              type="number"
              className="exchangeForm__input"
              min="0"
              value={inputValue}
              onChange={({ target }) =>
                setInput((inputValue) => (inputValue = target.value))
              }
            />
          </label>
          <span className="exchangeForm__currencySymbol">{inputCurrency}</span>
        </div>
        ⬇
        <div>
          <label>
            <input
              type="number"
              className="exchangeForm__input"
              disabled
              value={(rate * inputValue).toFixed(2)}
            />
          </label>
          <span className="exchangeForm__currencySymbol">{outputCurrency}</span>
        </div>
      </form>
    </div>
  );
};

export default ExchangeForm;
