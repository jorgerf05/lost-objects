// TableComponent.js

import React from "react";

const CustomTable = ({ data, columns }) => {
  return (
    <table className="divide-y divide-gray-200">
      <thead className="bg-black">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key} className="px-6 py-4 whitespace-nowrap text-black">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
