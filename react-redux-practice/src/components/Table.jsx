import { Fragment } from "react";

function Table( {data, config, keyFn} ) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.lable}>{column.header()}</Fragment>
    }
    return (
      <th key={column.lable}>{column.lable}</th>
    )
  });
  
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.lable}>
          {column.render(rowData)}
        </td>
      )
    })
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    )
  });
  
  
  return( 
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}
  
export default Table;