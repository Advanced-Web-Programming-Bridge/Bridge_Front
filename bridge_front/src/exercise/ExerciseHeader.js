import "./Exercise.css";
import Button from "react-bootstrap/Button";

function ExerciseHeader() {
  return (
    <div class="header">
      <div class="header-child">
        <div class="header-letter">Exercise</div>
        <div>
          <Button variant="link" id="button1">
            Link 1
          </Button>

          <Button variant="link" id="button2">
            Link 2
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseHeader;
