import React from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

const RecordGroup = ({ records, updateRecordQuantity,removeRecord }) => {
  return (
    <>
      <EmptyStage />
      {records.map((record, index) => (
        <Record
          updateRecordQuantity={updateRecordQuantity}
          key={record.id}
          index={index}
          record={record}
          removeRecord={removeRecord}
        />
      ))}
    </>
  );
};

export default RecordGroup;
