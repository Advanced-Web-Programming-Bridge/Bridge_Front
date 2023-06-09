import { useState } from "react";
import { ExerciseContext } from "./exerciseContext";
import "./style/exercise.css";
import ExerciseCalendar from "./exerciseCalendar";
import styled from "styled-components";
import ExerciseList from "./exerciseList";
import ExerciseTracker from "./exerciseTracker";
import ExerciseProgress from "./exerciseProgress";
import EditExerciseList from "./editExerciseList";

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
  height: 100%;
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
  const [showModal, setShowModal] = useState(false);

  const [exerciseData, setExerciseData] = useState({
    date: new Date().toString(),
    exerciseList: [
      {
        category: "가슴",
        list: [
          { id: 1, name: "벤치 프레스", goal: 5 },
          { id: 2, name: "덤벨 벤치 프레스", goal: 5 },
          { id: 3, name: "클라인 벤치 프레스", goal: 5 },
          { id: 4, name: "딥스", goal: 5 },
          { id: 5, name: "케이블 크로스 오버", goal: 5 },
        ],
      },
      {
        category: "유산소",
        list: [
          { id: 6, name: "달리기", goal: 5 },
          { id: 7, name: "자전거", goal: 5 },
          { id: 8, name: "등산", goal: 5 },
        ],
      },
    ],
  });

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
            <ExerciseContext.Provider value={{ percent }}>
              <ExerciseProgress />
            </ExerciseContext.Provider>
          </StyledBody1>

          {/* 오늘 뭐 해야하는지 보여주는 화면. useContext를 활용해 하위 component에서 percent를 변경할 수 있도록 함 */}
          <StyledBody2>
            <ExerciseContext.Provider value={{ setPercent, setShowModal }}>
              <ExerciseTracker exercises={todayList} />
            </ExerciseContext.Provider>
          </StyledBody2>
        </StyledToday>

        <ExerciseContext.Provider
          value={{ exerciseData, setExerciseData, showModal, setShowModal }}
        >
          <EditExerciseList />
        </ExerciseContext.Provider>

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
    </>
  );
}

export default ExerciseBody;
