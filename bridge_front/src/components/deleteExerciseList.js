import React, { useState, useContext, useEffect } from "react";
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

function DeleteExerciseList() {
  const { exerciseData, setExerciseData, setShowModal, setShowDeleteExercise } =
    useContext(ExerciseContext);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDelete = () => {
    const updatedExerciseData = { ...exerciseData };
    updatedExerciseData.exerciseList = updatedExerciseData.exerciseList.map(
      (category) => {
        const updatedList = category.list.filter(
          (exercise) => !selectedIds.includes(exercise.id)
        );
        return { ...category, list: updatedList };
      }
    );
    setExerciseData(updatedExerciseData);
    setSelectedIds([]);

    // Todo: 서버에 항목 삭제 요청하기
    alert("삭제 되었습니다!");
    setShowDeleteExercise(false);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowDeleteExercise(false);
    setShowModal(false);
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Select</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Goal</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {exerciseData.exerciseList.map((category) =>
              category.list.map((exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(exercise.id)}
                      onChange={() => {
                        if (selectedIds.includes(exercise.id)) {
                          setSelectedIds(
                            selectedIds.filter((id) => id !== exercise.id)
                          );
                        } else {
                          setSelectedIds([...selectedIds, exercise.id]);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell>{exercise.goal}</TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </Table>
        <Button
          onClick={handleDelete}
          disabled={selectedIds.length === 0}
          style={{ marginTop: "3%" }}
        >
          Delete
        </Button>
      </ModalContent>
    </ModalContainer>
  );
}

export default DeleteExerciseList;
