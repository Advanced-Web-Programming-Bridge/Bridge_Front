import ProgressBar from "react-animated-progress-bar";
import { useState } from "react";
import "./Exercise.css";
import { ExerciseContext } from "./ExerciseContext";
import TodayList from "./TodayList";

function ExerciseBody() {
  const [percent, setPercent] = useState(0);

  return (
    <div className="body">
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

      {/* 오늘 뭐 해야하는지 보여주는 화면 */}
      <ExerciseContext.Provider value={{ percent, setPercent }}>
        <TodayList />
      </ExerciseContext.Provider>
    </div>
  );
}

export default ExerciseBody;
