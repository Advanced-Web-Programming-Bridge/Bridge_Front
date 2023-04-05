import Calendar from "react-calendar";
import "../components/style/calendar.css";
import { ExerciseContext } from "./ExerciseContext";
import { useContext } from "react";

function ExerciseCalendar() {
  const { setDate } = useContext(ExerciseContext);

  function handleClick(date) {
    setDate(date);
    console.log(date);
  }

  return (
    <div>
      <Calendar onClickDay={handleClick} />
    </div>
  );
}

export default ExerciseCalendar;
