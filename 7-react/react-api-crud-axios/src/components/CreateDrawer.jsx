import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { baseUrl } from "../config/config";
import axios from "axios";
import { courseApi } from "../api/course";

const CreateDrawer = () => {
  const { createDrawer, toggleCreateDrawer, addCourse } =
    useContext(DataContext);

  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const newCourse = {
      title: formData.get("course_title"),
      short_name: formData.get("short_name"),
      fee: formData.get("course_fee"),
    };
    // console.log(newCourse);

    setIsLoading(true);

    const res = await courseApi.post("/courses", JSON.stringify(newCourse));

    addCourse(res.data);

    setIsLoading(false);

    if (formData.get("close")) {
      toggleCreateDrawer();
    }

    formRef.current.reset();
  };

  return (
    <div
      id="drawer-right-example"
      className={`fixed shadow top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
        !createDrawer && "translate-x-full"
      }`}
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
      aria-modal="true"
      role="dialog"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Create new Course
      </h5>
      <button
        onClick={toggleCreateDrawer}
        type="button"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3 pointer-events-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      {/* create form */}
      <form ref={formRef} onSubmit={handleForm} id="courseForm">
        <div className="mb-5">
          <label
            htmlFor="course_title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Title
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="course_title"
            name="course_title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg. Special Web Design"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="short_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Short Title
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="short_name"
            name="short_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg. SWD"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="course_fee"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Fee
          </label>
          <input
            disabled={isLoading}
            type="number"
            id="course_fee"
            name="course_fee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg. Special Web Design"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              disabled={isLoading}
              id="default-checkbox"
              type="checkbox"
              name="close"
              defaultValue
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Close after saved
            </label>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-70"
          >
            <span className="inline group-disabled:hidden">Create</span>
            <span className="hidden group-disabled:flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Loading ...
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDrawer;
