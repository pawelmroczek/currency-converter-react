import Loading from "./Loading";
import Error from "./Error";
import CurrencyBlock from "./CurrencyBlock";
import { Clock } from "./Clock";
import { useAPI } from "./useAPI";

const Main = () => {
  const rateData = useAPI();

  if (rateData.status === "success") {
    return <CurrencyBlock rateData={rateData} clock={<Clock />} />;
  }
  if (rateData.status === "error") {
    return <Error />;
  }
  return <Loading />;
};

export default Main;
