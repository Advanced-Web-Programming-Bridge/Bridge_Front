import React, { useState } from "react";
import styled from "styled-components";

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

const StyledEditButton = styled.button`
  position: relative;
  bottom: -3vh;
  right: 0;
  width: 100%;
`;

function ExerciseTracker({ exercises }) {
  const [exerciseData, setExerciseData] = useState(
    exercises.map((exercise) => ({ name: exercise.name, count: [] }))
  );

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    setExerciseData((prevData) =>
      prevData.map((exercise, idx) =>
        idx === index ? { ...exercise, count: [value] } : exercise
      )
    );
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

        <StyledEditButton> Edit </StyledEditButton>
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
}

export default ExerciseTracker;
