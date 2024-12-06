import CustomDataTable from "@/commonComponent/customDataTable";
import { Box } from "@mui/material";
import React from "react";

const dataVal = [
  { displayVal: "Title", dataVal: "title" },
  { displayVal: "Year", dataVal: "year" },
];

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
  {
    id: 3,
    title: "Ghostbusters data",
    year: "1985",
  },
];

const CustomerList = () => {
  return (
    <Box>
      <CustomDataTable colData={dataVal} rowData={data} />
    </Box>
  );
};

export default CustomerList;
