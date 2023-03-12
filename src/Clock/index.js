
import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
  const date=useCurrentDate();

  return <div className="time">Dziś jest {date} </div>;
};
