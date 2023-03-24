import CurrencyForm from "./CurrencyForm";
import ExchangeForm from "./ExchangeForm";
import { Wrapper } from "../styled";
import { useCurrency } from "./useCurrency";

const CurrencyBlock = ({ clock, rateData }) => {
  const {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  } = useCurrency(rateData.currency);

  return (
    <>
      <CurrencyForm
        inputCurrency={inputCurrency}
        outputCurrency={outputCurrency}
        onInputChange={onInputChange}
        onOutputChange={onOutputChange}
        calculateRate={calculateRate()}
        rateData={rateData}
      />
      <Wrapper>
        <ExchangeForm
          time={clock}
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          rate={calculateRate()}
          date={rateData.date}
        />
      </Wrapper>
    </>
  );
};

export default CurrencyBlock;
