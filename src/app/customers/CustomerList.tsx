import CustomDataTable from "@/commonComponent/customDataTable";
import { Box } from "@mui/material";
import React from "react";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { useRouter } from "next/navigation";

interface Column {
  displayVal: string;
  dataVal: string;
}

interface rowDataIF {
  // eslint-disable-line
  _id: string; // eslint-disable-line
  name: string; // eslint-disable-line
  age: number; // eslint-disable
  gender: string; // eslint-disable-line
  startDate: string; // eslint-disable-line
  endDate: string; // eslint-disable-line
}

const generateColumns = (data: string[]): Column[] => {
  const result = data?.map((key: string) => ({
    displayVal: key
      .replace(/_/g, "")
      .replace(/\b\w/g, (char) => char.toUpperCase()), // Formatting key for display
    dataVal: key,
  }));
  return result;
};

const CustomerList = () => {
  const router = useRouter();
  const customersList = useGetRecoilData(AtomsName.CUSTOMERSLIST);

  const colVal =
    customersList &&
    customersList?.length > 0 &&
    generateColumns(Object?.keys(customersList[0]));
  console.log("check the col---------", colVal);
  const updatedColumnsData = colVal && [
    ...colVal,
    { displayVal: "", dataVal: "edit", url: "customers/customer" },
    { displayVal: "", dataVal: "delete" },
  ];

  const handleEditFun = (id: rowDataIF) => {
    console.log("Edit Clicked for ID:", id); // eslint-disable-line
    router.push("customers/customer/" + id?._id);
  };
  const handleDeleteFun = (id: string) => {
    console.log("Delete Clicked for ID:", id); // eslint-disable-line
  };
  return (
    <Box>
      {colVal && customersList && (
        <CustomDataTable
          colData={updatedColumnsData}
          rowData={customersList}
          calBackFunctions={{
            editFun: handleEditFun,
            deleteFun: handleDeleteFun,
          }}
        />
      )}
    </Box>
  );
};

export default CustomerList;
