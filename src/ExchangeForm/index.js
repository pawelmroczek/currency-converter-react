import { useState } from "react";
import { Symbol, Wrapper, Input } from "./styled";

const ExchangeForm = ({ inputCurrency, outputCurrency, rate, time }) => {
  const [inputValue, setInput] = useState(0);

  return (
    <Wrapper>
      {time}
      <form> 
        <div>
          <label>
            Kwota do przeliczenia:
            <br />
            <Input
              type="number"
              min="0"
              value={inputValue}
              onChange={({ target }) =>
                setInput((inputValue) => (inputValue = target.value))
              }
            />
          </label>
          <Symbol>{inputCurrency}</Symbol>
        </div>
        ⬇
        <div>
          <label>
            <Input
              type="number"
              disabled
              value={(rate * inputValue).toFixed(2)}
            />
          </label>
          <Symbol>{outputCurrency}</Symbol>
        </div>
      </form>
    </Wrapper>
  );
};

export default ExchangeForm;
