import "./style.css";

const RateLabel = ({ rate }) => (
  <label>
    Kurs:
    <input className="form__rate" type="number" value={rate} disabled />
  </label>
);

export default RateLabel;
