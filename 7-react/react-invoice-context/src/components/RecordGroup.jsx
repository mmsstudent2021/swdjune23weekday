import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";
import { GeneralContext } from "../contexts/GeneralContext";

const RecordGroup = () => {
  const { records } = useContext(GeneralContext);
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record key={record.id} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
