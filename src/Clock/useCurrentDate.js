import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

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
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return formatedDate(date);
};
