import React from "react";

const List = ({ id, job, isDone, deleteTask, doneTask }) => {
  const handleCheck = () => {
    doneTask(id);
  };
  const handleDelBtn = () => {
    deleteTask(id);
  };
  return (
    <div className="list">
      <div className="group  border mb-3 overflow-hidden border-neutral-700 p-5 flex justify-between items-center">
        <div className="content flex items-center gap-3">
          <input
            className="list-check accent-neutral-700 w-4 h-4"
            type="checkbox"
            checked={isDone}
            onChange={handleCheck}
          />
          <div className={`${isDone && "line-through"}`}>{job}</div>
        </div>
        <div className="control opacity-100 pointer-events-none duration-300 translate-x-[100px] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 flex gap-1">
          <button
            className={`list-edit duration-300 active:scale-75 disabled:opacity-20 ${
              isDone && "opacity-20 pointer-events-none"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={handleDelBtn}
            className="list-del duration-300 active:scale-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
