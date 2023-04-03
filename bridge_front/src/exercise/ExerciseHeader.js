import "./Exercise.css";
import Button from "react-bootstrap/Button";

function ExerciseHeader() {
  return (
    <div className="header">
      <div className="header-child">
        <div className="header-letter">Exercise</div>
        <div className="links">
          {/* class name me-3은 margin end를 3만큼 주겠다라는 의미 */}
          <div className="me-3">
            <Button variant="link" id="button1">
              Link 1
            </Button>
          </div>

          {/* class name ms-3은 margin start를 3만큼 주겠다라는 의미 */}
          <div className="ms-3">
            <Button variant="link" id="button2">
              Link 2
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseHeader;
