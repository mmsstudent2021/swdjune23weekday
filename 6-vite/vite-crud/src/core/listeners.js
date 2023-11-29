import {
  courseEditFormHandler,
  courseFormHandler,
  rowGroupHandler,
} from "./handlers";
import { courseEditForm, courseForm, rowGroup } from "./selectors";

const listeners = () => {
  courseForm.addEventListener("submit", courseFormHandler);
  rowGroup.addEventListener("click", rowGroupHandler);
  courseEditForm.addEventListener("submit", courseEditFormHandler);
};

export default listeners;
