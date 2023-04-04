import { useContext, useState } from "react";
import "./Exercise.css";

function DayList() {
  // Todo: 서버에서 해당하는 날에 어떤 것을 해야하는지 data 받아오기
  const day = {
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

  return (
    <div className="body-div4">
      <div className="day-list">
        {day.exerciseList.map((item) => (
          <div key={item.category}>
            <h3>{item.category}</h3>
            <ul>
              {item.list.map((exercise) => (
                <li key={exercise}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayList;
