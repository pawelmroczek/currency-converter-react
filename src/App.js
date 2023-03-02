import { useState } from "react";
import Header from "./Header";
import CurrencyForm from "./CurrencyForm";

function App() {
  const [currency,setNewCurrency]=useState([
    {name:"Polski złoty",short:"PLN",input:true},
    {name:"Euro",short:"EUR",input:false}
  ])
  console.log((currency.filter(currency=>currency.name==="Euro")).name)

  return (
   <>
    <Header/>
    <main>
      <CurrencyForm currency={currency}/>
    </main>
   </>
  );
}

export default App;
