import { Box } from "@mui/material";
import React, { FC } from "react";
import DataTable from "react-data-table-component";

const dataVal = [
  { displayVal: "Title", dataVal: "title" },
  { displayVal: "Year", dataVal: "year" },
];

const columns = [
  {
    name: "Title",
    selector: (row: any) => row.title,
  },
  {
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const dynamicColumnsGeneration = () => {
  let abc: any = [];
  dataVal.map((d) => {
    abc.push({
      name: d.displayVal,
      selector: (row: any) => row[d.dataVal],
      sortable: true,
    });
  });
  console.log("check teh arry----", abc);
  return abc;
};

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];
const CustomDataTable: FC = () => {
  return (
    <Box>
      <DataTable
        // columns={columns}
        columns={dynamicColumnsGeneration()}
        data={data}
        selectableRows
        // onSelectedRowsChange={handleChange}
      />
    </Box>
  );
};

export default CustomDataTable;
