import initialRenders from "./core/initialrenders";
import listeners from "./core/listeners";

class Course {
  init() {
    console.log("App Start");
    initialRenders();
    listeners();
  }
}

export default Course;
