import Swal from "sweetalert2";
import { basedUrl } from "./configs";
import { rowGroup, rowTemplate } from "./selectors";

export const rowUi = ({ id, title, short_name, fee }) => {
  const row = rowTemplate.content.cloneNode(true);
  row.querySelector("tr").setAttribute("course-id",id)
  row.querySelector(".row-id").innerText = id;
  row.querySelector(".row-title").innerText = title;
  row.querySelector(".row-short").innerText = short_name;
  row.querySelector(".row-fee").innerText = fee;
  return row;
};

export const rowRender = (rows) => {
  rowGroup.innerHTML = "";
  rows.forEach((row) => rowGroup.append(rowUi(row)));
};

export const url = (path) => {
  return basedUrl + path;
};

export const toast = (message,icon="success") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon,
    title: message,
  });
};
