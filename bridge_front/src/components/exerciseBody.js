import { useState } from "react";
import { ExerciseContext } from "./exerciseContext";
import TodayList from "./todayList";
import "./style/exercise.css";
import ExerciseCalendar from "./exerciseCalendar";
import styled from "styled-components";
import exercise from "../exercise_header.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import ExerciseList from "./exerciseList";
import ExerciseTracker from "./exerciseTracker";

const StyledBody = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5vh;
  margin-bottom: 10vh;
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
  padding-left: 3%;
  padding-right: 3%;
`;

const StyledExerciseImage = styled.div`
  background-image: url(${exercise});
  background-size: cover;
  margin-bottom: 10%;
  width: 100%;
  height: 60%;
`;

const StyledBody2 = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledBody3 = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledBody4 = styled.div`
  width: 50%;
  height: 100%;
`;

function ExerciseBody() {
  const [percent, setPercent] = useState(0);
  const [date, setDate] = useState(new Date());

  const exerciseData = {
    date: new Date().toString(),
    exerciseList: [
      {
        category: "가슴",
        list: [
          "벤치 프레스",
          "덤벨 벤치 프레스",
          "클라인 벤치 프레스",
          "딥스",
          "케이블 크로스 오버",
        ],
      },
      {
        category: "유산소",
        list: ["달리기", "자전거", "등산"],
      },
    ],
  };

  const todayList = [
    {
      name: "벤치 프레스",
      goal: 5,
      todo: 3,
    },
    {
      name: "덤벨 벤치 프레스",
      goal: 5,
      todo: 1,
    },
    {
      name: "달리기",
      goal: 1,
      todo: 2,
    },
  ];

  return (
    <>
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
          <StyledBody2>
            <ExerciseContext.Provider value={{ setPercent }}>
              <ExerciseTracker exercises={todayList} />
            </ExerciseContext.Provider>
          </StyledBody2>
        </StyledToday>

        <h2>과거에 수행하였거나, 미래에 실행할 예정인 운동입니다.</h2>
        <StyledBorder />

        <div className="record">
          {/* calendar. useContext를 활용해 하위 component에서 click된 날자를 변경할 수 있도록 함 */}
          <StyledBody3>
            <ExerciseContext.Provider value={{ date, setDate }}>
              <ExerciseCalendar />
            </ExerciseContext.Provider>
          </StyledBody3>

          {/* 해당 날짜에 뭐 해야하는지, 했는지 정보 */}
          <StyledBody4>
            <ExerciseList exerciseData={exerciseData} />
          </StyledBody4>
        </div>
      </StyledBody>

      <StyledBorder />
    </>
  );
}

export default ExerciseBody;
