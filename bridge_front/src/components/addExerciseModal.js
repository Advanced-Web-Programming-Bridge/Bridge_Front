import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ExerciseContext } from "./exerciseContext";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

function AddExerciseModal(props) {
  const { setShowModal, setShowAddExercise } = useContext(ExerciseContext);

  const [exerciseType, setExerciseType] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseGoals, setExerciseGoals] = useState("");

  const handleSubmit = (event) => {
    // TODO: 서버에 전송
    setShowAddExercise(false);
    setShowModal(false);
    alert("서버에 전송되었습니다!");
  };

  const handleTypeChange = (event) => {
    setExerciseType(event.target.value);
  };

  const handleNameChange = (event) => {
    setExerciseName(event.target.value);
  };

  const handleGoalsChange = (event) => {
    setExerciseGoals(event.target.value);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>운동 추가하기</h1>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="type">운동 종류:</Label>
          <Input
            type="text"
            id="type"
            value={exerciseType}
            onChange={handleTypeChange}
          />
          <Label htmlFor="name">운동 이름:</Label>
          <Input
            type="text"
            id="name"
            value={exerciseName}
            onChange={handleNameChange}
          />
          <Label htmlFor="goals">목표 개수:</Label>
          <Input
            type="text"
            id="goals"
            value={exerciseGoals}
            onChange={handleGoalsChange}
          />
          <ButtonContainer>
            <Button type="submit">추가하기</Button>
            <Button type="button" onClick={() => setShowAddExercise(false)}>
              취소하기
            </Button>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
}

export default AddExerciseModal;
