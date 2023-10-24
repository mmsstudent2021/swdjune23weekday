import Swal from "sweetalert2";
import { recordRowDelHandler, recordRowQuantityIncrement } from "../app/record";
import { costTotal } from "./selectors";

export const manageProductHandler = () => {
  manageProductBox.classList.toggle("translate-x-full");
  manageProductBox.classList.add("duration-300");
};

export const recordListHandler = (event) => {
  const currentRecordRow = event.target.closest(".record-row");
  // console.log("U click");
  if (event.target.classList.contains("record-row-del")) {
    recordRowDelHandler(event);
  } else if (event.target.classList.contains("record-row-increment-q")) {
    recordRowQuantityIncrement(currentRecordRow.getAttribute("product-id"));
  }
};

export const printHandler = () => {
  // ??

  Swal.fire({
    title: "Are you sure?",
    text: "After print, data will be clear",
    icon: "question",
    showCancelButton: true,

    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      const rows = app.querySelectorAll(".record-row");
      const recordData = [...rows].map((row) => {
        return {
          serviceId: parseInt(row.getAttribute("product-id")),
          quantity: parseInt(row.querySelector(".record-row-q").innerText),
          cost: parseFloat(row.querySelector(".record-row-cost").innerText),
        };
      });

      console.log({
        customer_name: "kyaw kyaw",
        timestamp: Date.now(),
        total: parseFloat(costTotal.innerText),
        recordData,
      });

      setTimeout(() => {
        window.print();

      rows.forEach((row) => row.remove());
      }, 500);
    }
  });
};
