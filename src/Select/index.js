import "./style.css";

const Select = ({ header, actuall, onSelectChange, currencyTable }) => (
  <label>
    {header}
    <select
      className="select"
      value={currencyTable.find((curr) => curr.short === actuall).id}
      onChange={onSelectChange}
    >
      {currencyTable.map((curr) => (
        <option key={curr.id} value={curr.id}>
          {curr.name}[{curr.short}]
        </option>
      ))}
    </select>
  </label>
);

export default Select;
