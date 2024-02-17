import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";
import { deleteContact } from "../service/contact.service";

const ContactCardComponents = ({ data, handleDelete }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

  return (
    <div className="w-2/4 h-auto border my-5 flex justify-between items-center p-3">
      <button onClick={handleRedirect} className="flex-1">
        <div>
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div className="space-x-5">
        <button onClick={handleEdit}>
          <CiEdit />
        </button>
        <button onClick={handleDelete.bind(this, data.id)}>
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
