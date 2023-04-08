import ProgressBar from "react-bootstrap/ProgressBar";
import exercise from "../exercise.png";
import styled from "styled-components";
import { useContext } from "react";
import { ExerciseContext } from "./exerciseContext";

const StyledExerciseImage = styled.div`
  background-image: url(${exercise});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const StyledOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
`;

function ExerciseProgress() {
  const { percent } = useContext(ExerciseContext);

  return (
    <StyledOuterDiv>
        <StyledExerciseImage />
        <ProgressBar animated now={percent} />
    </StyledOuterDiv>
  );
}

export default ExerciseProgress;
