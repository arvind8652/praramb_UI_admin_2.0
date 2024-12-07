"use client";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomerList from "./CustomerList";
import {
  useGetRecoilData,
  useSetRecoilData,
} from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { postRequest } from "../_lib/apiService";
import CustomButton from "@/commonComponent/customButton";

const Customers = () => {
  const router = useRouter();
  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
  const setCustomersListRecoilData = useSetRecoilData(AtomsName.CUSTOMERSLIST);

  const navigateToAddCustomer = (e: any): void => {
    e.preventDefault();
    router.push("customers/newCustomer");
  };

  const customerListApi = async () => {
    try {
      const reqData = { brandId: brandDetail?._id };
      const res = await postRequest("customer/customerList", reqData);
      if (res.data) {
        setCustomersListRecoilData(res.data);
      }
    } catch (error) {
      console.log("error--------", error);
    }
  };
  useEffect(() => {
    customerListApi();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <CustomButton
          sx={{ mb: 1 }}
          data={"Add New Customer"}
          onClick={navigateToAddCustomer}
        />
      </Box>
      <CustomerList />
    </>
  );
};

export default Customers;
