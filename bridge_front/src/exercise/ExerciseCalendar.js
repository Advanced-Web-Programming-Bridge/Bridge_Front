import Calendar from "react-calendar";
import "../components/style/calendar.css";
import { ExerciseContext } from "./ExerciseContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledInnerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ExerciseCalendar() {
  const { setDate } = useContext(ExerciseContext);

  function handleClick(date) {
    setDate(date);

    // Todo: 해당 날짜에 무엇을 하는지 서버로부터 받아오기
    console.log(date);
  }

  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <Calendar onClickDay={handleClick} />
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
}

export default ExerciseCalendar;
