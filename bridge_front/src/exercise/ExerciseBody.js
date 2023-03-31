import ProgressBar from "react-animated-progress-bar";
import { useState } from "react";
import "./Exercise.css";

// 현재 % 적용이 안 되는 오류 있음

function ExerciseBody() {
  const [percent, setPercent] = useState(0);
  const [checkedlist, setCheckedlist] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const todoList = [
    "벤치 프레스",
    "덤벨 벤치 프레스",
    "클라인 벤치 프레스",
    "딥스",
    "케이블 크로스 오버",
  ];

  const chekedItemHandler = (value, isChecked) => {
    if (isChecked) {
      console.log("before: ", checkedlist);
      setCheckedlist((prev) => [...prev, value]);
      console.log("after: ", checkedlist);
      return;
    }

    if (!isChecked && checkedlist.includes(value)) {
      console.log("before: ", checkedlist);
      setCheckedlist(checkedlist.filter((item) => item !== value));
      console.log("after: ", checkedlist);
      return;
    }

    return;
  };

  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    chekedItemHandler(value, e.target.checked);
    console.log(value, e.target.checked);
    console.log(checkedlist);

    setPercent((checkedlist.length * 100) / todoList.length);

    console.log("percent:", percent);
  };

  console.log(checkedlist);
  console.log("current percent:", percent);

  return (
    <div className="body">
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

      <div className="checkbox-group">
        {todoList.map((item, index) => (
          <div className="checkbox" key={index}>
            <input
              className="checkbox-input"
              type="checkbox"
              id={item}
              checked={checkedlist.includes(item)}
              onChange={(e) => checkHandler(e, item)}
            />
            <label className="checkbox-label" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseBody;
