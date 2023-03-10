import { useEffect, useState } from "react";
import "./style.css";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

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

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  });

  return (
    <div className="exchangeForm__time">Dziś jest {formatedDate(time)} </div>
  );
};
