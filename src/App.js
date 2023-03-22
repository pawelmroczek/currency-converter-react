import Header from "./Header";
import CurrencyForm from "./CurrencyForm";
import Select from "./Select";
import RateLabel from "./RateLabel";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";
import Loading from "./Loading";
import Body from "./Body";
import { useAPI } from "./useAPI";
import { Clock } from "./Clock";
import { useCurrency } from "./useCurrency";

function App() {
  const rateData = useAPI();

  const {
    inputCurrency,
    outputCurrency,
    calculateRate,
    onInputChange,
    onOutputChange,
  } = useCurrency(rateData.currency);

  if (rateData.status==="loaded") {
    return (
      <>
        <Header />
        <main>
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
        </main>
        <Footer />
      </>
    );
  } else if (rateData.status==="error") {
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
