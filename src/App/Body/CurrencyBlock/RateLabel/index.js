import { Rate } from "./styled";

const RateLabel = ({ rate }) => (
  <label>
    Kurs:
    <Rate type="number" value={rate} disabled />
  </label>
);

export default RateLabel;
