import axios from "axios";
import { useEffect, useState } from "react";
import currencyTable from "./currency";

export const useAPI = () => {
  const [problem, setProblem] = useState(0);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF"
        );
        console.log(response.data);
        setTimeout(() => {
          setLoaded(1);
        }, 1000);
      } catch (error) {
        setProblem(1);
      }
    })();
  }, []);
  return { currencyTable, problem, loaded };
};
