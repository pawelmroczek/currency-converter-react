import axios from "axios";
import { useEffect, useState } from "react";
import currencyBase from "./CurrencyBlock/currency";

const API_URL =
  "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF";

export const useAPI = () => {
  const [rateData, setRateData] = useState({
    status: "loading",
    currency: [],
    date: "",
  });

  useEffect(() => {
    const catchData = async () => {
      try {
        const { data } = await axios.get(API_URL);
        const rates = data.rates;
        setRateData({
          currency: currencyBase.map((curr) =>
            rates[curr.short] ? { ...curr, toPLN: rates[curr.short] } : curr
          ),
          date: data.date,
          status: "success",
        });
      } catch (error) {
        setRateData({ status: "error" });
      }
    };

    setTimeout(catchData, 1000);
  }, []);
  return rateData;
};
