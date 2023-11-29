import Swal from "sweetalert2";
import { rowUi, toast, url } from "./functions";
import { courseEditForm, courseForm, editDrawer, rowGroup } from "./selectors";

export const courseFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(courseForm);

  const jsonData = JSON.stringify({
    title: formData.get("course_title"),
    short_name: formData.get("short_name"),
    fee: formData.get("course_fee"),
  });

  const myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");

  // disable form
  courseForm.querySelector("button").toggleAttribute("disabled");

  fetch(url("/courses"), {
    method: "POST",
    headers: myHeader,
    body: jsonData,
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      courseForm.querySelector("button").toggleAttribute("disabled");

      rowGroup.append(rowUi(json));
      courseForm.reset();

      toast("Course create successfully");
    });
};

export const rowGroupHandler = (event) => {
  if (event.target.classList.contains("row-del")) {
    const currentRow = event.target.closest("tr");
    const currentRowId = currentRow.getAttribute("course-id");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        event.target.toggleAttribute("disabled");
        fetch(url("/courses/" + currentRowId), { method: "DELETE" }).then(
          (res) => {
            event.target.toggleAttribute("disabled");

            if (res.status === 204) {
              toast("Course Deleted");
              currentRow.remove();
            }
          }
        );
      }
    });
  } else if (event.target.classList.contains("row-edit")) {
    const currentRow = event.target.closest("tr");
    const currentRowId = currentRow.getAttribute("course-id");
    // 1 old value retrieve
    event.target.toggleAttribute("disabled");
    fetch(url("/courses/" + currentRowId))
      .then((res) => res.json())
      .then((json) => {
        // 2 show old value
        event.target.toggleAttribute("disabled");
        courseEditForm.querySelector("#edit_course_id").value = json.id;
        courseEditForm.querySelector("#edit_course_title").value = json.title;
        courseEditForm.querySelector("#edit_short_name").value =
          json.short_name;
        courseEditForm.querySelector("#edit_course_fee").value = json.fee;
        editDrawer.show();
        // 3 changes update
      });
  }
};

export const courseEditFormHandler = (event) => {
  event.preventDefault();
  //id
  //url
  // header
  const myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");
  // body
  const formData = new FormData(courseEditForm);
  const currentId = formData.get("edit_course_id");

  const jsonData = JSON.stringify({
    title: formData.get("edit_course_title"),
    short_name: formData.get("edit_short_name"),
    fee: formData.get("edit_course_fee"),
  });
  // method
  courseEditForm.querySelector("button").toggleAttribute("disabled");
  fetch(url("/courses/" + currentId), {
    method: "PUT",
    headers: myHeader,
    body: jsonData,
  })
    .then((res) => res.json())
    .then((json) => {
      courseEditForm.querySelector("button").toggleAttribute("disabled");
      courseEditForm.reset();
      editDrawer.hide();

      const currentRow = rowGroup.querySelector(`tr[course-id='${json.id}']`);
      currentRow.querySelector(".row-title").innerText = json.title;
      currentRow.querySelector(".row-short").innerText = json.short_name;
      currentRow.querySelector(".row-fee").innerText = json.fee;

    });
};
