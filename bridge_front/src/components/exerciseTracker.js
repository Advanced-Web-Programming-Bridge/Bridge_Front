import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ExerciseContext } from "./exerciseContext";
import { Button } from "react-bootstrap";

const styles = `
  table {
    border-collapse: collapse;
    table-layout: auto;
    width: 100%;
  }

  th,
  td {
    padding: 0.25vw;
    border: 1px solid black;
    text-align: center;
  }

  tr {
    border-bottom: 1px solid black;
  }

  td input {
    width: 100%;
    box-sizing: border-box;
  }
`;

const StyledOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
`;

const StyledInnerDiv = styled.div`
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

const StyledEditButton = styled(Button)`
  position: relative;
  bottom: -1.5vh;
  right: 0;
  width: 100%;
`;

function ExerciseTracker({ exercises }) {
  const { setPercent } = useContext(ExerciseContext);

  const [exerciseData, setExerciseData] = useState(
    exercises.map((exercise) => ({ name: exercise.name, count: [] }))
  );

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    setExerciseData((prevData) => {
      const newData = prevData.map((exercise, idx) =>
        idx === index ? { ...exercise, count: [value] } : exercise
      );
      // 각 운동마다 진행한 횟수 합산
      const total = newData.reduce((acc, exercise) => {
        return acc + parseInt((exercise.count[0] || 0), 10);
      }, 0);
  
      // 전체 운동의 목표 횟수 합
      const goalTotal = exercises.reduce((acc, exercise) => {
        return acc + exercise.goal;
      }, 0);
  
      // 내가 진행한 횟수의 비율 계산
      const percent = (total / goalTotal) * 100;
      setPercent(percent);
      console.log(total);
      console.log(goalTotal);
      console.log(percent);
  
      return newData;
    });
  };
  

  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <style>{styles}</style>
        <table>
          <thead>
            <tr>
              <th>운동</th>
              <th>목표 횟수</th>
              <th>운동 횟수</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.goal}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    style={{
                      width: "5vw",
                      textAlign: "center",
                      border: "1px solid transparent",
                    }}
                    value={exerciseData[index].count[0] || ""}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <StyledEditButton variant = "dark"> Edit </StyledEditButton>

      </StyledInnerDiv>
    </StyledOuterDiv>
  );
}

export default ExerciseTracker;
