import "./style/exercise.css";
import styled from "styled-components";
import exercise from "../exercise_header.jpg";

const introduce =
  "FitLog은 운동 내용을 기록하고, 과거의 운동 기록을 볼 수 있는 건강한 삶을 위한 웹 서비스입니다.\n" +
  "운동 루틴을 체크하고, 목표에 맞게 관리하여 건강한 삶을 시작해보세요.";

const StyledHeader = styled.div`
  margin-top: 7vh;
  background-color: black;
  background-image: url(${exercise});
  width: 100%;
  height: 50vh;
  position: relative;
`;

const StyledHeaderChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledExercise = styled.div`
  font-size: 8vh;
  color: black;
`;

const StyledIntroduce = styled.div`
  white-space: pre-wrap;
  font-size: 2vh;
  color: black;
`;

function ExerciseHeader() {
  return (
    <StyledHeader>
      <StyledHeaderChild>
        <StyledExercise>Exercise</StyledExercise>
        <StyledIntroduce>{introduce}</StyledIntroduce>
      </StyledHeaderChild>
    </StyledHeader>
  );
}

export default ExerciseHeader;
