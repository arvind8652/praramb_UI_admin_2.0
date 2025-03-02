import React, { FC } from "react";
import DataTable from "react-data-table-component";
import { dynamicColumnsGeneration } from "./dataTableFun";
import { Box, Button, useTheme } from "@mui/material";
import styles from "./customDataTable.module.css";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomDivider from "../customDivider";
import { getUnmatchedObjects } from "@/app/_lib/commonFn";
interface IrowData {
  id: number;
  title: string;
  year: string;
}
interface IrowDatanew {
  id: number;
  title: string;
  year: string;
  month: string;
}

interface IcolData {
  displayVal: string;
  dataVal: string;
  url?: string;
}

interface IcolBackFunctions {
  editFun: any;
  deleteFun: any;
}

type colDataType = IcolData;
type rowDataType = IrowData | IrowDatanew; // in this way we can pass multiple object in array when we are not sure.
interface ICustomDataTable {
  colData: colDataType[];
  rowData: rowDataType[];
  calBackFunctions?: IcolBackFunctions;
}

const CustomDataTable: FC<ICustomDataTable> = (props) => {
  const { colData, rowData, calBackFunctions } = props;

  const theme = useTheme(); // Get the current MUI theme

  // ✅ Automatically adapt styles to MUI light/dark mode
  const customStyles = {
    rows: {
      style: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
    },
    headCells: {
      style: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        color: theme.palette.text.secondary,
      },
    },
    pagination: {
      style: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
    },
    selectedRow: {
      style: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
    },
  };

  const newlyAddedColumns = () => {
    let updatedColumnsData = dynamicColumnsGeneration(colData);
    const paramData = {
      arr1: colData,
      arr2: updatedColumnsData,
      arr1Key: "displayVal",
      arr2Key: "name",
    };
    const unmatchedObjects = getUnmatchedObjects(paramData);

    if (unmatchedObjects.length > 0) {
      updatedColumnsData.push({
        name: "Action",
        selector: "action",
        sortable: true,
        cell: (row: any) => (
          <Box sx={{ display: "flex", gap: "4px" }}>
            {unmatchedObjects.map(
              (obj: { dataVal: string; displayVal: string }) =>
                obj.dataVal === "edit" ? (
                  <>
                    <BorderColorOutlinedIcon
                      color={"primary"}
                      onClick={() => calBackFunctions?.editFun(row)}
                      sx={{ cursor: "pointer" }}
                    />
                    <CustomDivider
                      orientation="vertical"
                      sx={{ bgcolor: "grey", width: "1.5px", height: "20px" }}
                    />
                  </>
                ) : (
                  <DeleteOutlineOutlinedIcon
                    color={"error"}
                    onClick={() => calBackFunctions?.deleteFun(row)}
                    sx={{ cursor: "pointer" }}
                  />
                )
            )}
          </Box>
        ),
      });
    }
    return updatedColumnsData;
  };
  return (
    <Box className={styles.tableContainer}>
      <DataTable
        // columns={dynamicColumnsGeneration(colData)}
        columns={newlyAddedColumns()}
        data={rowData}
        selectableRows
        // className={styles.table}
        customStyles={customStyles}
        pagination
        // onSelectedRowsChange={handleChange}
      />
    </Box>
  );
};

export default CustomDataTable;
