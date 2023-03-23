import axios from "axios";
import { useEffect, useState } from "react";
import currencyBase from "./CurrencyBlock/currency";

export const useAPI = () => {
  const [rateData, setRateData] = useState({
    status: "loading",
    currency: [],
    date: "",
  });

  useEffect(() => {
    const catchData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF"
        );
        const rates = response.data.rates;
        setRateData({
          currency: currencyBase.map((curr) => {
            if (rates[curr.short]) {
              return { ...curr, toPLN: rates[curr.short] };
            }
            return curr;
          }),
          date: response.data.date,
          status: "loaded",
        });
      } catch (error) {
        setRateData({ status: "error" });
      }
    };

    setTimeout(catchData, 1000);
  }, []);
  return rateData;
};
