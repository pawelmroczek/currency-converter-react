import "./style.css";

const CurrencyForm = ({ currency }) => (
  <form>
    <label>
      Coś tam
      <select value={currency.filter(currency=>currency.name==="Euro").name}>
        {currency.map((currency) => (
          <option>{currency.name}</option>
        ))}
      </select>
    </label>
  </form>
);

export default CurrencyForm;
