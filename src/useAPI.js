import axios from "axios";
import { useEffect, useState } from "react";
import currencyBase from "./currency";

export const useAPI = () => {
  const [problem, setProblem] = useState(0);
  const [currencyTable,setCurrencyTable]=useState([]);
  const [date,setNewDate]=useState("");

 

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CHF"
          );
          const rates = response.data.rates;
          setNewDate(response.data.date);
          setCurrencyTable(currencyBase.map(curr=>{
            if(rates[curr.short]){
              return{...curr,toPLN:rates[curr.short]}
            }
            return curr;
          }))
        } catch (error) {
          setProblem(1);
        }
      })();
            }, 1000);
  }, []);
  return { currencyTable, problem,date};
};
