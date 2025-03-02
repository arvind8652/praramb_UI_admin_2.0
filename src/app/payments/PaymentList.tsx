import React from "react";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { Box } from "@mui/material";
import CustomDataTable from "@/commonComponent/customDataTable";

const PaymentList = () => {
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
    { displayVal: "Gender", dataVal: "gender" },
    { displayVal: "", dataVal: "edit" },
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

  return (
    <Box>
      {colVal && paymentsList && (
        <CustomDataTable colData={colVal} rowData={rowVal} />
      )}
    </Box>
  );
};

export default PaymentList;
