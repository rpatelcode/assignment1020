import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

import createRowData from "./createRowData";
import { Container, Button } from "semantic-ui-react";
// import "./styles.css";

const ExcelTable = props => {
  let columns;
  if (props.data) {
    try {
      let arr = Object.getOwnPropertyNames(props.data[1]);
      // console.log("arr", arr);

      columns = arr.map(val => {
        return {
          key: val,
          name: val
        };
      });
      // console.log("columns", columns);
    } catch (err) {
      // console.log("Error coming");
    }
  }

  return props.data ? (
    <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => props.data[i]}
        rowsCount={1000}
        enableCellSelect={true}
      />
      <Button
        style={{ marginTop: "2em" }}
        content="DownLoad SQL"
        primary
        disabled
        onClick={() => {}}
      />
      <Button
        style={{ marginTop: "2em" }}
        content="Load into SQL Server"
        primary
        disabled
        onClick={() => {}}
      />
    </>
  ) : null;
};

export default ExcelTable;
