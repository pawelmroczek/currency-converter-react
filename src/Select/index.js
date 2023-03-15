import { StyledSelect } from "./styled";

const Select = ({ header, actuall, onSelectChange, currencyTable }) => (
  <label>
    {header}
    <StyledSelect
      className="select"
      value={currencyTable.find((curr) => curr.short === actuall).id}
      onChange={onSelectChange}
    >
      {currencyTable.map((curr) => (
        <option key={curr.id} value={curr.id}>
          {curr.name}[{curr.short}]
        </option>
      ))}
    </StyledSelect>
  </label>
);

export default Select;
