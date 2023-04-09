import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledOuterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerDiv = styled.div`
  position: absolute;
  width: 80%
`;

function ExerciseList(props) {
  const { exerciseData } = props;

  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        {exerciseData.exerciseList.map((exercise, index) => {
          return (
            <div key={index}>
              <Card bg={getRandomColor()} text="white" className="mb-2">
                <Card.Header>{exercise.category}</Card.Header>
                <Card.Body>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li style={{ color: "#fff" }}>
                      {exercise.list.map((item) => item.name).join(", ")}
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
}

export default ExerciseList;
