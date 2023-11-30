import Swal from "sweetalert2";
import { rowRender, rowUi, toast, url } from "./functions";
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

export const editCellHandler = (event) => {
  if (event.target.classList.contains("cell-editable")) {
    const currentRow = event.target.closest("tr");
    const currentRowId = currentRow.getAttribute("course-id");
    const currentCell = event.target;
    const currentText = currentCell.innerText;
    const currentCellColumnName = currentCell.getAttribute("cell-col");
    currentCell.innerText = "";

    const input = document.createElement("input");
    input.value = currentText;
    input.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    currentCell.append(input);
    input.focus();

    input.addEventListener("blur", () => {
      const newValue = input.value;
      currentCell.innerText = newValue;

      const myHeader = new Headers();
      myHeader.append("Content-Type", "application/json");

      const updateData = {};
      updateData[currentCellColumnName] = newValue;

      const jsonData = JSON.stringify(updateData);

      fetch(url("/courses/" + currentRowId), {
        method: "PATCH",
        headers: myHeader,
        body: jsonData,
      })
        .then((res) => res.json())
        .then((json) => toast("Update successfully"));
    });
  }
};

export const searchInputHandler = (event) => {
  event.target.previousElementSibling.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-4 h-4 animate-spin"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
  />
</svg>`;
  fetch(url("/courses?title[like]=" + event.target.value))
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      event.target.previousElementSibling.innerHTML = `
      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
      `;
      if(json.length){
        rowRender(json);
      }else{
        toast("No course found");
        rowGroup.innerHTML = `<tr><td colspan='5' class='px-6 py-4 text-center'>There is no course.<a href='http://${location.host}'>Browse all</a></td></tr>`
      }
    });
};
