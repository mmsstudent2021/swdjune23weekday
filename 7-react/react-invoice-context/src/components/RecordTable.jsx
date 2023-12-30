import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import RecordGroup from "./RecordGroup";
import { GeneralContext } from "../contexts/GeneralContext";

const RecordTable = () => {
  const { records } = useContext(GeneralContext);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr className=" ">
          <th scope="col" className="px-6 py-4">
            #
          </th>
          <th scope="col" className="px-6 py-4">
            Product name
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Price
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Quantity
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Cost
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
        <RecordGroup />
      </tbody>
      <tfoot>
        {records.length > 0 && (
          <tr className="border-b">
            <td className="px-6 py-4 text-center" colSpan={4}>
              Total
            </td>
            <td className="px-6 py-4 text-end" id="recordTotal">
              {records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
            </td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};

export default RecordTable;
