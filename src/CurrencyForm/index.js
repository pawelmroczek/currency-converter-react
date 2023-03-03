import "./style.css";

const CurrencyForm = ({ children, calculateRate }) => (
  <form className="form__currencyChoice" onChange={calculateRate}>    
      {children}
  </form>
);

export default CurrencyForm;
