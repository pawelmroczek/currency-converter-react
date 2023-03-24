import { useCurrentDate } from "./useCurrentDate";
import { Date } from "./styled";

export const Clock = () => {
  const date = useCurrentDate();

  const formatedDate = (date) =>
    date.toLocaleString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "numeric",
    });

  return <Date>Dziś jest {formatedDate(date)} </Date>;
};
