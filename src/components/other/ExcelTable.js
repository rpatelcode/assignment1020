import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

import createRowData from "./createRowData";

// import "./styles.css";

const defaultColumnProperties = {
  sortable: true,
  width: 120
};

const columns = [
  {
    key: "id",
    name: "ID",
    sortDescendingFirst: true
  },
  {
    key: "title",
    name: "Title"
  },
  {
    key: "firstName",
    name: "First Name"
  },
  {
    key: "lastName",
    name: "Last Name"
  },
  {
    key: "email",
    name: "Email"
  },
  {
    key: "street",
    name: "Street"
  },
  {
    key: "zipCode",
    name: "ZipCode"
  }
].map(c => ({ ...c, ...defaultColumnProperties }));

const ROW_COUNT = 50;

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

const Example = ({ initialRows }) => {
  console.log("initialRows", initialRows);
  const [rows, setRows] = useState(initialRows);
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={ROW_COUNT}
      minHeight={1000}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(initialRows, sortColumn, sortDirection))
      }
    />
  );
};

const ExcelTable = props => {
  console.log(props.data);
  return <Example initialRows={createRowData(50)} />;
};

export default ExcelTable;
