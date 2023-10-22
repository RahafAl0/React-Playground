import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (lable) => {
    console.log(lable);
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

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
