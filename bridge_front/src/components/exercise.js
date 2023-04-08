import ExerciseBody from "./exerciseBody";
import ExerciseHeader from "./exerciseHeader";
import Footer from "./footer";
import OffcanvasExample from "./navbar";

function Exercise() {
  return (
    <>
      <OffcanvasExample/>
      <ExerciseHeader />
      <ExerciseBody />
      <Footer/>
    </>
  );
}

export default Exercise;
