import Calendar from "react-calendar";
import "../components/style/calendar.css";
import { ExerciseContext } from "./exerciseContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  position: relative;
`;

const StyledInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
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
        <StyledCalendar onClickDay={handleClick} />
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
}

export default ExerciseCalendar;
