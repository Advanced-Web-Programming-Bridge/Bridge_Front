import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseContext } from "./exerciseContext";
import AddExerciseModal from "./addExerciseModal";
import DeleteExerciseList from "./deleteExerciseList";

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
  const { exerciseData, setExerciseData, showModal, setShowModal } =
    useContext(ExerciseContext);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [showDeleteExercise, setShowDeleteExercise] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !event.target.closest(".modal-content")) {
        setShowModal(false);
        setShowAddExercise(false);
        setShowDeleteExercise(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  const handleAdd = () => {
    setShowAddExercise(true);
    setShowDeleteExercise(false);
  };

  const handleDelete = () => {
    setShowDeleteExercise(true);
    setShowAddExercise(false);
  };

  return (
    <>
      {showModal && (
        <ModalContainer>
          <ModalContent className="modal-content">
            <h1>어떤 작업을 하고 싶으세요?</h1>
            <ButtonContainer>
              <Button onClick={handleAdd}>운동 추가하기</Button>
              <ExerciseContext.Provider
                value={{ setShowModal, setShowAddExercise }}
              >
                {showAddExercise && <AddExerciseModal />}
              </ExerciseContext.Provider>
              <Button onClick={handleDelete}>운동 삭제하기</Button>å
              <ExerciseContext.Provider
                value={{
                  exerciseData,
                  setExerciseData,
                  setShowModal,
                  showDeleteExercise,
                  setShowDeleteExercise,
                }}
              >
                {showDeleteExercise && <DeleteExerciseList />}
              </ExerciseContext.Provider>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default EditExerciseList;
