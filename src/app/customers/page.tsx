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

  const navigateToAddCustomer = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    router.push("customers/newCustomer");
  };

  const customerListApi = async () => {
    if (!brandDetail?._id) {
      console.error("Brand ID is missing. Cannot fetch customer list.");
      return;
    }

    try {
      const reqData = { brandId: brandDetail._id };
      console.log("Requesting Customer List with Data:", reqData);
      const res = await postRequest("customer/customerList", reqData);

      if (res?.data) {
        console.log("Customer List Response:", res.data);
        setCustomersListRecoilData(res.data);
      } else {
        console.error("Failed to fetch customer list. Response is empty.");
      }
    } catch (error) {
      console.error("Error fetching customer list:", error);
    }
  };

  useEffect(() => {
    console.log("Customers Component Mounted");
    if (brandDetail?._id) {
      customerListApi();
    }
  }, [brandDetail]); // Add dependency on `brandDetail`

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
