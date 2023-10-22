import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = (lable) => {
    if(sortOrder === null) {
      setSortOrder('asc');
      setSortBy(lable);
    }else if(sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(lable);
    }else if(sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null)
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.lable)}> {column.lable} IS SORTABLE
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
)}

export default SortableTable;
