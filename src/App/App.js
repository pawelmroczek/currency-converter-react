import Header from "./Header";
import CurrencyForm from "./Body/CurrencyForm";
import Select from "./Body/Select";
import RateLabel from "./Body/RateLabel";
import ExchangeForm from "./Body/ExchangeForm";
import Footer from "./Footer";
import Loading from "../Loading";
import Body from "./Body";
import { useAPI } from "./Body/useAPI";
import { Clock } from "./Body/Clock";
import { useCurrency } from "./Body/useCurrency";
import { Main, Wrapper } from "./styled";

function App() {
  const rateData = useAPI();

  const {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  } = useCurrency(rateData.currency);

  if (rateData.status === "loaded") {
    return (
      <Wrapper>
        <Header />
        <Main>
          <CurrencyForm>
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
            <RateLabel rate={calculateRate()} />
          </CurrencyForm>
          <ExchangeForm
            time={<Clock />}
            inputCurrency={inputCurrency}
            outputCurrency={outputCurrency}
            rate={calculateRate()}
            date={rateData.date}
          />
        </Main>

        <Footer />
      </Wrapper>
    );
  } else if (rateData.status === "error") {
    return <div>Chyba nie masz neta</div>;
  }
  return (
    <>
      <Header />
      <Loading />
    </>
  );
}

export default App;
