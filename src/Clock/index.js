import { useCurrentDate } from "./useCurrentDate";
import { Date } from "./styled";

export const Clock = () => {
  const date = useCurrentDate();

  return <Date>Dziś jest {date} </Date>;
};
