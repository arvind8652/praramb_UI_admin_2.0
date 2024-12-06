import React, { FC } from "react";
import DataTable from "react-data-table-component";
import { dynamicColumnsGeneration } from "./dataTableFun";

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
}

type colDataType = IcolData;
type rowDataType = IrowData | IrowDatanew; // in this way we can pass multiple object in array when we are not sure.
interface ICustomDataTable {
  colData: colDataType[];
  rowData: rowDataType[];
}

const CustomDataTable: FC<ICustomDataTable> = (props) => {
  const { colData, rowData } = props;
  return (
    <>
      <DataTable
        columns={dynamicColumnsGeneration(colData)}
        data={rowData}
        selectableRows
        // onSelectedRowsChange={handleChange}
      />
    </>
  );
};

export default CustomDataTable;
