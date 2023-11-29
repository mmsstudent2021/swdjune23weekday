import { Drawer } from "flowbite";

export const app = document.querySelector("#app");
export const searchBtn = app.querySelector("#searchBtn");
export const rowGroup = app.querySelector("#rowGroup");
export const courseForm = app.querySelector("#courseForm");
export const courseEditForm = app.querySelector("#courseEditForm");
export const rowTemplate = app.querySelector("#rowTemplate");

// set the drawer menu element
const $targetEl = document.getElementById("edit-drawer");

// options with default values
const options = {
  placement: "right",
  backdrop: true,
  bodyScrolling: false,
  edge: false,
  edgeOffset: "",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onHide: () => {
    console.log("drawer is hidden");
  },
  onShow: () => {
    console.log("drawer is shown");
  },
  onToggle: () => {
    console.log("drawer has been toggled");
  },
};

// instance options object
const instanceOptions = {
  id: "edit-drawer",
  override: true,
};


export const editDrawer = new Drawer($targetEl, options, instanceOptions);