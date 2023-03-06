import "./style.css";

const RateLabel = ({ rate }) => (
  <label>
    Kurs:
    <input className="rate" type="number" value={rate} disabled />
  </label>
);

export default RateLabel;
