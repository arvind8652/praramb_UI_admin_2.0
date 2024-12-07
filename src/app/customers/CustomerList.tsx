import CustomDataTable from "@/commonComponent/customDataTable";
import { Box } from "@mui/material";
import React from "react";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";

const generateColumns = (data: any) => {
  const result = data?.map((key: string) => ({
    displayVal: key
      .replace(/_/g, "")
      .replace(/\b\w/g, (char) => char.toUpperCase()), // Formatting key for display
    dataVal: key,
  }));
  return result;
};

const CustomerList = () => {
  const customersList = useGetRecoilData(AtomsName.CUSTOMERSLIST);
  const colVal = generateColumns(Object.keys(customersList[0]));
  return (
    <Box>
      <CustomDataTable colData={colVal} rowData={customersList} />
    </Box>
  );
};

export default CustomerList;
