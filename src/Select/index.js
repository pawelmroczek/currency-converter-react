import "./style.css";

const Select = ({ header, currency, onSelectChange, input }) => (
  <label>
    {header}
    <select
      className="select"
      value={
        input
          ? currency.find((curr) => curr.input).id
          : currency.find((curr) => curr.output).id
      }
      onChange={onSelectChange}
    >
      {currency.map((curr) => (
        <option key={curr.id} value={curr.id}>
          {curr.name}[{curr.short}]
        </option>
      ))}
    </select>
  </label>
);

export default Select;
