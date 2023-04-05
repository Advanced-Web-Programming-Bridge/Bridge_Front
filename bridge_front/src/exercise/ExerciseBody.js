import { useState } from "react";
import "./Exercise.css";
import { ExerciseContext } from "./ExerciseContext";
import TodayList from "./TodayList";
import ExerciseCalendar from "./ExerciseCalendar";
import styled from 'styled-components';
import exercise from "../static/image/exercise.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';

const StyledBody = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5vh;
  width: 80%;
`;

const StyledBorder = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

const StyledToday = styled.div`
  display: flex;
  height: 50vh;
`;

const StyledBody1 = styled.div`
  width: 50%;
  padding-top: 5%;
  padding-left:3%;
  padding-right:3%
`;

const StyledExerciseImage = styled.div`
  background-image: url(${exercise});
  background-size: cover;
  margin-bottom: 10%;
  width: 100%;
  height: 60%;
`;

function ExerciseBody() {
  const [percent, setPercent] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <StyledBody>
      <h2>오늘 계획한 운동량입니다.</h2>
      <StyledBorder />
      <StyledToday>

        {/* Image와 프로그래스바 */}
        <StyledBody1>
          <StyledExerciseImage />
          <ProgressBar animated now={percent} />
        </StyledBody1>
        
        {/* 오늘 뭐 해야하는지 보여주는 화면. useContext를 활용해 하위 component에서 percent를 변경할 수 있도록 함 */}
        <ExerciseContext.Provider value={{ percent, setPercent }}>
          <TodayList />
        </ExerciseContext.Provider>
      </StyledToday>

      <StyledBorder />
      <div className="record">
        {/* calendar. useContext를 활용해 하위 component에서 click된 날자를 변경할 수 있도록 함 */}
        <div className="body-div3">
          <div className="calendar">
            <ExerciseContext.Provider value={{ date, setDate }}>
              <ExerciseCalendar />
            </ExerciseContext.Provider>
          </div>
        </div>

        {/* 해당 날짜에 뭐 해야하는지, 했는지 정보 */}
        <div className="body-div4"></div>
      </div>
    </StyledBody>
  );
}

export default ExerciseBody;
