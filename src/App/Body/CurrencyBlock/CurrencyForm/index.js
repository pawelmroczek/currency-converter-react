import { Form } from "./styled";
import Select from "../Select";
import RateLabel from "../RateLabel";

const CurrencyForm = ({inputCurrency,onInputChange,outputCurrency,onOutputChange,calculateRate,rateData}) => (
  <Form>
    <Select
      header="Waluta wejściowa:"
      actuall={inputCurrency}
      currencyTable={rateData.currency}
      onSelectChange={onInputChange}
    />
    <Select
      header="Waluta wyjściowa:"
      currencyTable={rateData.currency}
      onSelectChange={onOutputChange}
      actuall={outputCurrency}
    />
    <RateLabel rate={calculateRate} />
  </Form>
);

export default CurrencyForm;
