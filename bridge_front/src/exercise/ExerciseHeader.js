import "./Exercise.css";
import styled from 'styled-components';

const introduce =
  "FitLog은 운동 내용을 기록하고, 과거의 운동 기록을 볼 수 있는 건강한 삶을 위한 웹 서비스입니다.\n" +
  "운동 루틴을 체크하고, 목표에 맞게 관리하여 건강한 삶을 시작해보세요."

const StyledExercise = styled.div`
  font-size: 8vh;
  color: white;
`;

const StyledIntroduce = styled.div`
  white-space: pre-wrap;
  font-size: 2vh;
  color: white;
`;

function ExerciseHeader() {
  return (
    <div className="header">
      <div className="header-child">
        <StyledExercise>Exercise</StyledExercise>
        <StyledIntroduce>{introduce}</StyledIntroduce>
      </div>
    </div>
  );
}

export default ExerciseHeader;
