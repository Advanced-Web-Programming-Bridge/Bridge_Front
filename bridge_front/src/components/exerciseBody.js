import ProgressBar from "react-animated-progress-bar";
import { useState } from "react";
import "./style/exercise.css";
import { ExerciseContext } from "./exerciseContext";
import TodayList from "./todayList";
import StyledCalendar from "./calendar.js";

function ExerciseBody() {
  const [percent, setPercent] = useState(0);

  return (
    <div className="body">
      <div className="today">
        {/* progress bar */}
        <div className="progress-bar">
          <ProgressBar
            width="1"
            height="1"
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
        </div>

        {/* 오늘 뭐 해야하는지 보여주는 화면. useContext를 활용해 하위 component에서 percent를 변경할 수 있도록 함 */}
        <ExerciseContext.Provider value={{ percent, setPercent }}>
          <TodayList />
        </ExerciseContext.Provider>
      </div>

      <div className="record">

        {/* calendar */}
        <div className="body-div3">
          <div className="calendar">
            <StyledCalendar />
          </div>
        </div>

        {/* 해당 날짜에 뭐 해야하는지, 했는지 정보 */}
        <div className="body-div4">
          
        </div>
      </div>
    </div>
  );
}

export default ExerciseBody;
