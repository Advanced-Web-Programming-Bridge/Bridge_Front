import Calendar from "react-calendar";
import "../components/style/calendar.css";
import { ExerciseContext } from "./ExerciseContext";
import { useContext } from "react";

function ExerciseCalendar() {
  const { setDate } = useContext(ExerciseContext);

  function handleClick(date) {
    setDate(date);

    // Todo: 해당 날짜에 무엇을 하는지 서버로부터 받아오기
    console.log(date);
  }

  return (
    <div>
      <Calendar onClickDay={handleClick} />
    </div>
  );
}

export default ExerciseCalendar;
