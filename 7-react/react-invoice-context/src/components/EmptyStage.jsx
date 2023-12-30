import React from "react";

const EmptyStage = () => {
  return (
    <tr className="hidden last:table-row border-b">
      <td colSpan={5} className="px-6 py-4 text-center">
        There is no record. Buy Something
      </td>
    </tr>
  );
};

export default EmptyStage;
