import { useContext, useState } from "react";
import "./Exercise.css";
import { ExerciseContext } from "./ExerciseContext";

// Todo: 현재 %값이 이상하게 적용됨. 수정 필요
function TodayList() {
  const [checkedlist, setCheckedlist] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const { percent, setPercent } = useContext(ExerciseContext);

  // Todo: 서버에서 오늘 해야하는 data를 받아와야 함
  const todoList = [
    "벤치 프레스",
    "덤벨 벤치 프레스",
    "클라인 벤치 프레스",
    "딥스",
    "케이블 크로스 오버",
  ];

  // 체크박스를 눌렀을 때 체크 여부에 따라 배열 변경
  // 기존에 체크가 되어 있는데 체크한 경우 checkedlist에서 제거
  // 기존에 체크가 되어 있지 않는데 체크한 경우 checkedlist에 추가
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

  // 체크박스를 클릭했을 때 checkedlist내 요소 변경 및 percent 변경
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

  // 오늘 해야하는 list를 돌며 화면에 출력
  return (
    <div className="body-div2">
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

export default TodayList;
