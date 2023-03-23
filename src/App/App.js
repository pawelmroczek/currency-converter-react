import Header from "./Header";
import CurrencyForm from "./Body/CurrencyBlock/CurrencyForm";
import Select from "./Body/CurrencyBlock/Select";
import RateLabel from "./Body/CurrencyBlock/RateLabel";
import ExchangeForm from "./Body/CurrencyBlock/ExchangeForm";
import Footer from "./Footer";
import Body from "./Body";
import { useAPI } from "./Body/useAPI";
import { Clock } from "./Body/Clock";
import { useCurrency } from "./Body/CurrencyBlock/useCurrency";
import { Main, Wrapper } from "./styled";

function App() {
  const rateData = useAPI();



  return(   <Wrapper>
    <Header />
    <Main>
      <Body/>
    </Main>
    <Footer />
  </Wrapper>)
  
}

export default App;
