const currencyTable = [
  {
    id: 0,
    name: "Polski złoty",
    short: "PLN",
    input: true,
    output: false,
    toPLN: 1,
  },
  {
    id: 1,
    name: "Euro",
    short: "EUR",
    input: false,
    output: false,
    toPLN: 4.7085,
  },
  {
    id: 2,
    name: "Dolar amerykański",
    short: "USD",
    input: false,
    output: false,
    toPLN: 4.6254,
  },
  {
    id: 3,
    name: "Frank Szwajcarski",
    short: "CHF",
    input: false,
    output: true,
    toPLN: 4.8101,
  },
];

export default currencyTable;
