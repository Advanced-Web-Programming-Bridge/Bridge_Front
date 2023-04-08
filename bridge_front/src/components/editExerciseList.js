import React, { useContext } from "react";
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

function EditExerciseList() {
  const { showModal, setShowModal } = useContext(ExerciseContext);

  const handleAdd = () => {};

  const handleDelete = () => {};

  const handleClickOutside = (event) => {
    if (showModal && !event.target.closest(".modal-content")) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <ModalContainer>
          <ModalContent className="modal-content">
            <h1>어떤 작업을 하고 싶으세요?</h1>
            <ButtonContainer>
              <Button onClick={handleAdd}>운동 추가하기</Button>
              <Button onClick={handleDelete}>운동 삭제하기</Button>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default EditExerciseList;
