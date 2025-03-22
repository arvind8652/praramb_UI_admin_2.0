import React from "react";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { Box } from "@mui/material";
import CustomDataTable from "@/commonComponent/customDataTable";
import { useRouter } from "next/navigation";

interface rowDataIF {
  _id: string;
  email: string;
  expiryDate: string;
  gender: "male" | "female" | "other";
  mobile: string;
  name: string;
  paymentFor: string;
  registrationDate: string;
  startDate: string;
  totalAmountToPay: number;
}
const PaymentList = () => {
  const router = useRouter();
  const colVal = [
    { displayVal: "Id", dataVal: "_id" },
    { displayVal: "Name", dataVal: "name" },
    { displayVal: "Mobile", dataVal: "mobile" },
    { displayVal: "Amt to Pay", dataVal: "totalAmountToPay" },
    { displayVal: "Payment for", dataVal: "paymentFor" },
    // { displayVal: "Registration Date", dataVal: "registrationDate" },
    { displayVal: "Start Date", dataVal: "startDate" },
    { displayVal: "Expiry Date", dataVal: "expiryDate" },
    // { displayVal: "Email", dataVal: "email" },
    // { displayVal: "Gender", dataVal: "gender" },
    { displayVal: "", dataVal: "edit", url: "payments/payment" },
    { displayVal: "", dataVal: "delete" },
  ];
  const paymentsList = useGetRecoilData(AtomsName.PAYMENTSLIST);
  const rowVal =
    paymentsList &&
    paymentsList.map((item: any) => {
      return {
        _id: item._id,
        name: item.custJoinDetailId.custDetailId.name,
        mobile: item.custJoinDetailId.custDetailId.mobile,
        totalAmountToPay: item.totalAmountToPay,
        paymentFor: item.paymentFor,
        registrationDate: item.custJoinDetailId.registrationDate,
        startDate: item.custJoinDetailId.startDate,
        expiryDate: item.custJoinDetailId.expiryDate,
        email: item.custJoinDetailId.custDetailId.email,
        gender: item.custJoinDetailId.custDetailId.gender,
      };
    });

  const handleEditFun = (id: rowDataIF) => {
    console.log("Edit Clicked for ID:", id); // eslint-disable-line
    router.push("payments/payment/" + id?._id);
  };
  const handleDeleteFun = (id: string) => {
    console.log("Delete Clicked for ID:", id); // eslint-disable-line
  };
  return (
    <Box>
      {colVal && paymentsList && (
        <CustomDataTable
          colData={colVal}
          rowData={rowVal}
          calBackFunctions={{
            editFun: handleEditFun,
            deleteFun: handleDeleteFun,
          }}
        />
      )}
    </Box>
  );
};

export default PaymentList;
