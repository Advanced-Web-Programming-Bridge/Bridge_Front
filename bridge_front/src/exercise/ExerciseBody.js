import ProgressBar from "react-animated-progress-bar";
import { useState } from "react";
import "./Exercise.css";
import { ExerciseContext } from "./ExerciseContext";
import TodayList from "./TodayList";
import StyledCalendar from "../components/calendar.js";

function ExerciseBody() {
  const [percent, setPercent] = useState(0);

  return (
    <div className="body">
      <div className="today">
        {/* progress bar */}
        <ProgressBar
          width="500px"
          height="10px"
          fontColor="white"
          trackWidth="10"
          percentage={percent}
          trackPathColor="grey"
          trackBorderColor="black"
          hollowBackgroundColor="#333333"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "green",
            poor: "red",
          }}
        />

        {/* 오늘 뭐 해야하는지 보여주는 화면. useContext를 활용해 하위 component에서 percent를 변경할 수 있도록 함 */}
        <ExerciseContext.Provider value={{ percent, setPercent }}>
          <TodayList />
        </ExerciseContext.Provider>
      </div>

      <div className="calendar">
        <StyledCalendar />
      </div>
    </div>
  );
}

export default ExerciseBody;
