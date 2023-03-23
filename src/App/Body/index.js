import Loading from "./Loading";
import Problem from "./Error";
import CurrencyBlock from "./CurrencyBlock";
import { Clock } from "./Clock";
import { useAPI } from "./useAPI";

const Body = () => {
  const rateData = useAPI();

  if (rateData.status === "loaded") {
    return <CurrencyBlock rateData={rateData} clock={<Clock />} />;
  } else if (rateData.status === "error") {
    return <Problem />;
  }
  return <Loading />;
};

export default Body;
